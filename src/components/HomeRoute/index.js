import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {GrFormClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import {LoaderView} from '../FailureAndLoaderView'

import VideoItem from '../VideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppHomeContainer,
  HomeContainer,
  SideBarContainer,
  HomeContentContainer,
  BannerContainer,
  LogoAndCloseButtonContainer,
  CloseButton,
  Logo,
  BannerText,
  GetNowButton,
  HomeVideosContainer,
  CustomSearchInput,
  SearchContainer,
  SearchButton,
  VideosListContainer,
  Container,
  ImageContainer,
  Text,
  RetryButton,
  FailureDescription,
} from './styledComponents'

import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    hideBanner: false,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  getHomeVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
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
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseBtn = () => {
    this.setState({hideBanner: true})
  }

  onClickRetry = () => {
    this.getHomeVideosList()
  }

  onClickRetry = () => {
    this.getHomeVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.setState({searchInput: event.target.value}, this.getHomeVideosList)
    }
  }

  searchVideos = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getHomeVideosList)
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
            <Text isDarkTheme={isDarkTheme}>Oops! Something Went Wrong</Text>
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

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Container>
            <ImageContainer
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Text isDarkTheme={isDarkTheme}>No Search results found</Text>
            <Text para as="p">
              Try different key words or remove search filter
            </Text>
            <RetryButton onClick={this.onClickRetry} type="button">
              Retry
            </RetryButton>
          </Container>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }

    return (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem
            isTrending={false}
            key={eachVideo.id}
            eachVideo={eachVideo}
          />
        ))}
      </VideosListContainer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return <LoaderView />
      default:
        return null
    }
  }

  renderVideosList = () => {
    const {searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeVideosContainer isDarkTheme={isDarkTheme}>
              <SearchContainer>
                <CustomSearchInput
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onEnterSearchInput}
                  value={searchInput}
                  placeholder="Search"
                  type="search"
                />
                <SearchButton
                  data-testid="searchButton"
                  isDarkTheme={isDarkTheme}
                  onClick={this.searchVideos}
                  type="button"
                >
                  <BiSearchAlt2 size={20} />
                </SearchButton>
              </SearchContainer>
              {this.renderAllViews()}
            </HomeVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    const {hideBanner} = this.state
    const accessToken = Cookies.get('jwt_token')
    if (accessToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <AppHomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <HomeContentContainer isDarkTheme={isDarkTheme}>
                  {!hideBanner && (
                    <BannerContainer data-testid="banner">
                      <LogoAndCloseButtonContainer>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />

                        <CloseButton
                          data-testid="close"
                          onClick={this.onClickCloseBtn}
                          type="button"
                        >
                          <GrFormClose size={32} />
                        </CloseButton>
                      </LogoAndCloseButtonContainer>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetNowButton type="button">GET IT NOW</GetNowButton>
                    </BannerContainer>
                  )}
                  {this.renderVideosList()}
                </HomeContentContainer>
              </HomeContainer>
            </AppHomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
