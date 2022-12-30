import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  width: 96%;
`

export const NavBarLogo = styled.img`
  width: 180px;
  height: 30px;
  padding-left: 40px;
  @media (min-width: 768px) {
    width: 200px;
    height: 40px;
  }
`
export const NavItemsContainerLargeScreen = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`

export const NavItemsContainerSmallScreen = styled.ul`
  display: flex;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  margin-left: 20px;
  list-style-type: none;
  background-color: transparent;
  border: none;
`

export const LogoutButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: ${props =>
    props.isDarkTheme ? '2px solid #f4f4f4' : '2px solid #3b82f6'};
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#3b82f6')};
  font-weight: 600;
  border-radius: 5px;
  padding: 0px 25px 0px 25px;
  font-size: 18px;
  margin-left: 20px;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 40px;
  width: 40px;
  border-radius: 5px;
`
export const CloseButton = styled(Button)`
  margin-top: 30px;
  margin-right: 30px;
  align-self: flex-end;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  min-width: 100vw;
`

export const PopUpCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
  width: 30%;
  box-shadow: 0px 0px 2px 1px #f1f5f9;
`
export const PopUpMessage = styled.p`
  color: #212121;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`

export const CancelButton = styled(Button)`
  color: #616e7c;
  border: 1px solid #616e7c;
  width: 80px;
`
export const ConfirmButton = styled(Button)`
  background-color: #3b82f6;
  color: #f1f1f1;
  width: 80px;
`
