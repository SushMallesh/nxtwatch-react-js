import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {LoaderView} from '../FailureAndLoaderView'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppTrendingContainer,
  TrendingContainer,
  SideBarContainer,
  TrendingContentContainer,
  TrendingBannerContainer,
  TrendingBanner,
  Text,
  FireCard,
  TrendingVideosListContainer,
  Container,
  Heading,
  FailureDescription,
  RetryButton,
  ImageContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      trendingVideosList: [],
    })

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'

    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedData,
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

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TrendingVideosListContainer isDarkTheme={isDarkTheme}>
              {trendingVideosList.map(eachVideo => (
                <VideoItem
                  isTrending
                  eachVideo={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </TrendingVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
            <AppTrendingContainer
              isDarkTheme={isDarkTheme}
              data-testid="trending"
            >
              <Header />
              <TrendingContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <TrendingContentContainer isDarkTheme={isDarkTheme}>
                  <TrendingBannerContainer isDarkTheme={isDarkTheme}>
                    <TrendingBanner data-testid="banner">
                      <FireCard isDarkTheme={isDarkTheme}>
                        <HiFire color="#ff0000" size={28} />
                      </FireCard>
                      <Text as="h1" isDarkTheme={isDarkTheme}>
                        Trending
                      </Text>
                    </TrendingBanner>
                  </TrendingBannerContainer>
                  {this.renderAllViews()}
                </TrendingContentContainer>
              </TrendingContainer>
            </AppTrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
