import {Component} from 'react'
import {FaGamepad} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  AppGamingContainer,
  GamingContainer,
  SideBarContainer,
  GamingBannerContainer,
  GamingBanner,
  Text,
  FireCard,
} from './styledComponents'

class Gaming extends Component {
  render() {
    return (
      <AppGamingContainer>
        <Header />
        <GamingContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <GamingBannerContainer>
            <GamingBanner>
              <FireCard>
                <FaGamepad color="#ff0000" size={28} />
              </FireCard>
              <Text>Gaming</Text>
            </GamingBanner>
          </GamingBannerContainer>
        </GamingContainer>
      </AppGamingContainer>
    )
  }
}

export default Gaming
