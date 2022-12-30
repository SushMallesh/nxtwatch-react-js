import {Link} from 'react-router-dom'

import {FaFire, FaGamepad} from 'react-icons/fa'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideBarContainer,
  SideBarItems,
  SideBarItemContainer,
  SideBarItem,
  ContactUsContainer,
  ContactUsText,
  IconsContainer,
  Icon,
  ContactUsDescription,
} from './styledComponents'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <SideBarItems>
            <Link style={{textDecoration: 'none'}} to="/">
              <SideBarItemContainer>
                <AiFillHome color="#616e7c" size={24} />
                <SideBarItem isDarkTheme={isDarkTheme}>Home</SideBarItem>
              </SideBarItemContainer>
            </Link>

            <Link to="/trending" style={{textDecoration: 'none'}}>
              <SideBarItemContainer>
                <FaFire color="#616e7c" size={24} />
                <SideBarItem isDarkTheme={isDarkTheme}>Trending</SideBarItem>
              </SideBarItemContainer>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <SideBarItemContainer>
                <FaGamepad color="#616e7c" size={24} />
                <SideBarItem isDarkTheme={isDarkTheme}>Gaming</SideBarItem>
              </SideBarItemContainer>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <SideBarItemContainer>
                <BiListPlus color="#616e7c" size={24} />
                <SideBarItem isDarkTheme={isDarkTheme}>
                  Saved videos
                </SideBarItem>
              </SideBarItemContainer>
            </Link>
          </SideBarItems>
          <ContactUsContainer>
            <ContactUsText isDarkTheme={isDarkTheme}>CONTACT US</ContactUsText>
            <IconsContainer>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <ContactUsDescription isDarkTheme={isDarkTheme} as="p">
              Enjoy!Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
