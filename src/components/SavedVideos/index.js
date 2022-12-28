import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  AppSavedVideosContainer,
  SavedVideosContainer,
  SideBarContainer,
  SavedVideosBannerContainer,
  SavedVideosBanner,
  Text,
  FireCard,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <AppSavedVideosContainer>
        <Header />
        <SavedVideosContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <SavedVideosBannerContainer>
            <SavedVideosBanner>
              <FireCard>
                <HiFire color="#ff0000" size={28} />
              </FireCard>
              <Text>Saved Videos</Text>
            </SavedVideosBanner>
          </SavedVideosBannerContainer>
        </SavedVideosContainer>
      </AppSavedVideosContainer>
    )
  }
}

export default SavedVideos
