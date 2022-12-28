import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  AppSavedVideosContainer,
  SavedVideosContainer,
  SideBarContainer,
  SavedVideosBannerContainer,
  SavedVideosBanner,
  Text,
  FireCard,
  SavedVideosContentContainer,
  Container,
  ImageContainer,
  Description,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = props => {
  const renderNoSavedVideosView = () => (
    <Container>
      <ImageContainer
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Text>No saved videos found</Text>
      <Description para as="p">
        You can save your videos while watching them
      </Description>
    </Container>
  )

  const renderSavedVideos = () => {
    const {savedVideosList} = props

    return (
      <SavedVideosListContainer>
        {savedVideosList.map(eachVideo => (
          <VideoItem eachVideo={eachVideo} isTrending key={eachVideo.id} />
        ))}
      </SavedVideosListContainer>
    )
  }

  const renderSavedVideosViews = () => {
    const {savedVideosList} = props
    if (savedVideosList.length === 0) {
      return renderNoSavedVideosView()
    }
    return renderSavedVideos()
  }

  return (
    <AppSavedVideosContainer>
      <Header />
      <SavedVideosContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <SavedVideosContentContainer>
          <SavedVideosBannerContainer>
            <SavedVideosBanner>
              <FireCard>
                <HiFire color="#ff0000" size={28} />
              </FireCard>
              <Text>Saved Videos</Text>
            </SavedVideosBanner>
          </SavedVideosBannerContainer>
          {renderSavedVideosViews()}
        </SavedVideosContentContainer>
      </SavedVideosContainer>
    </AppSavedVideosContainer>
  )
}

export default SavedVideos
