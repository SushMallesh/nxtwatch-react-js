import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'

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
  ImageContainer,
  RetryButton,
  Description,
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

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      trendingVideosList: [],
    })

    const jwtToken = Cookies.get('access_token')
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

  renderLoader = () => (
    <Container>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </Container>
  )

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return <TrendingVideosListContainer>list</TrendingVideosListContainer>
  }

  renderFailureView = () => (
    <Container>
      <ImageContainer
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Description>Oops! Something Went Wrong</Description>
      <Description para as="p">
        We are having some trouble to complete your request.Please try again.
      </Description>
      <RetryButton type="button">Retry</RetryButton>
    </Container>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <AppTrendingContainer>
        <Header />
        <TrendingContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <TrendingContentContainer>
            <TrendingBannerContainer>
              <TrendingBanner>
                <FireCard>
                  <HiFire color="#ff0000" size={28} />
                </FireCard>
                <Text>Trending</Text>
              </TrendingBanner>
            </TrendingBannerContainer>
            {this.renderAllViews()}
          </TrendingContentContainer>
        </TrendingContainer>
      </AppTrendingContainer>
    )
  }
}

export default Trending
