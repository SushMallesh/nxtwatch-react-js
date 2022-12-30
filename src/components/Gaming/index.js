import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import {LoaderView} from '../FailureAndLoaderView'
import GameVideoItem from '../GameVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppGamingContainer,
  GamingContainer,
  SideBarContainer,
  GamingBannerContainer,
  GamingBanner,
  Text,
  FireCard,
  GamingContentContainer,
  GamingVideosListContainer,
  Container,
  ImageContainer,
  FailureDescription,
  RetryButton,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Container>
            <ImageContainer
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <Heading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </Heading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton onClick={this.onClickRetry} type="button">
              Retry
            </RetryButton>
          </Container>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGameVideos = () => {
    const {gamingVideosList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingVideosListContainer isDarkTheme={isDarkTheme}>
              {gamingVideosList.map(eachVideo => (
                <GameVideoItem eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </GamingVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGameVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return <LoaderView />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <AppGamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
              <Header />
              <GamingContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <GamingContentContainer isDarkTheme={isDarkTheme}>
                  <GamingBannerContainer isDarkTheme={isDarkTheme}>
                    <GamingBanner>
                      <FireCard isDarkTheme={isDarkTheme}>
                        <FaGamepad color="#ff0000" size={28} />
                      </FireCard>
                      <Text as="h1" isDarkTheme={isDarkTheme}>
                        Gaming
                      </Text>
                    </GamingBanner>
                  </GamingBannerContainer>
                  {this.renderAllViews()}
                </GamingContentContainer>
              </GamingContainer>
            </AppGamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
