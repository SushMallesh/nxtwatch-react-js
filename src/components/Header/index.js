import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {GrFormClose} from 'react-icons/gr'

import {ImSun} from 'react-icons/im'

import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import SideBar from '../SideBar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavBarContainer,
  NavContent,
  NavBarLogo,
  NavItemsContainerLargeScreen,
  NavItemsContainerSmallScreen,
  NavItem,
  ProfileImage,
  CloseButton,
  CloseButtonContainer,
  LogoutButton,
  PopUpContainer,
  PopUpMessage,
  PopUpCard,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const navBarLogo = isDarkTheme ? darkThemeLogo : lightThemeLogo

        return (
          <NavBarContainer isDarkTheme={isDarkTheme}>
            <NavContent>
              <Link to="/">
                <NavBarLogo src={navBarLogo} alt="website logo" />
              </Link>
              <NavItemsContainerLargeScreen>
                <NavItem
                  data-testid="theme"
                  onClick={toggleTheme}
                  as="button"
                  type="button"
                >
                  {isDarkTheme ? (
                    <ImSun size={36} color="#ffffff" />
                  ) : (
                    <FaMoon size={36} />
                  )}
                </NavItem>
                <NavItem>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavItem>

                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      onClick={onClickLogout}
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="logout-popup"
                >
                  {close => (
                    <PopUpContainer>
                      <PopUpCard>
                        <PopUpMessage>
                          Are you sure, you want to logout
                        </PopUpMessage>
                        <ButtonsContainer>
                          <CancelButton
                            onClick={() => {
                              close()
                            }}
                            type="button"
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopUpCard>
                    </PopUpContainer>
                  )}
                </Popup>
              </NavItemsContainerLargeScreen>
              <NavItemsContainerSmallScreen>
                <NavItem onClick={toggleTheme} as="button" type="button">
                  <FaMoon size={28} />
                </NavItem>
                <Popup
                  modal
                  trigger={
                    <NavItem as="button">
                      <FaBars size={28} />
                    </NavItem>
                  }
                >
                  {close => (
                    <CloseButtonContainer>
                      <CloseButton
                        onClick={() => {
                          close()
                        }}
                      >
                        <GrFormClose size={32} />
                      </CloseButton>
                      <SideBar />
                    </CloseButtonContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutButton onClick={onClickLogout} type="button">
                      <FiLogOut size={28} />
                    </LogoutButton>
                  }
                  className="logout-popup"
                >
                  {close => (
                    <PopUpContainer>
                      <PopUpCard>
                        <PopUpMessage>
                          Are you sure you want to logout?
                        </PopUpMessage>
                        <ButtonsContainer>
                          <CancelButton
                            onClick={() => {
                              close()
                            }}
                            type="button"
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopUpCard>
                    </PopUpContainer>
                  )}
                </Popup>
              </NavItemsContainerSmallScreen>
            </NavContent>
          </NavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
