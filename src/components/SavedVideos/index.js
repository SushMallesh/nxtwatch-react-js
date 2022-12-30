import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

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

const SavedVideos = () => {
  const renderNoSavedVideosView = () => (
    <Container>
      <ImageContainer
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Text as="h1">No saved videos found</Text>
      <Description para as="p">
        You can save your videos while watching them
      </Description>
    </Container>
  )

  const renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        if (savedVideosList.length === 0) {
          return renderNoSavedVideosView()
        }

        return (
          <SavedVideosListContainer isDarkTheme={isDarkTheme}>
            {savedVideosList.map(eachVideo => (
              <VideoItem eachVideo={eachVideo} isTrending key={eachVideo.id} />
            ))}
          </SavedVideosListContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <AppSavedVideosContainer
            isDarkTheme={isDarkTheme}
            data-testid="savedVideos"
          >
            <Header />
            <SavedVideosContainer>
              <SideBarContainer>
                <SideBar />
              </SideBarContainer>
              <SavedVideosContentContainer isDarkTheme={isDarkTheme}>
                <SavedVideosBannerContainer isDarkTheme={isDarkTheme}>
                  <SavedVideosBanner data-testid="banner">
                    <FireCard isDarkTheme={isDarkTheme}>
                      <HiFire color="#ff0000" size={28} />
                    </FireCard>
                    <Text as="h1">Saved Videos</Text>
                  </SavedVideosBanner>
                </SavedVideosBannerContainer>
                {renderSavedVideos()}
              </SavedVideosContentContainer>
            </SavedVideosContainer>
          </AppSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
