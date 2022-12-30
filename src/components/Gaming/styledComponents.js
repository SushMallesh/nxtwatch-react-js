import styled from 'styled-components'

export const AppGamingContainer = styled.div`
  max-width: 550px;
  background-color: ${props => (props.isDarkTheme ? '0f0f0f' : '#f9f9f9')};
  @media (min-width: 768px) {
    max-width: 1150px;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-left: 0;
  }
`

export const SideBarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 28%;
    flex-shrink: 0;
  }
`
export const GamingBannerContainer = styled.div`
  background-color: #f4f4f4;
  height: 120px;
  width: 100%;
  padding-top: 15px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
`
export const GamingBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`
export const Text = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#424242')};
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 20px;
`
export const FireCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#cbd5e1')};
  padding: 25px;
  border-radius: 45px;
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'transparent')};
`

export const GamingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f5f9')};
  width: 100%;
  padding-left: 24px;
  padding-top: 40px;
  margin-top: 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.img`
  height: 360px;
  width: 350px;
`

export const Heading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-family: Roboto;
  font-size: 20px;
  line-height: 0.5;
`
export const FailureDescription = styled.p`
  color: #1e293b;
  font-family: Roboto;
  font-size: 20px;
  line-height: 0.5;
`
export const RetryButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #4f46e5;
  font-weight: 600;
  font-size: 15px;
  color: #f1f1f1;
  border-radius: 8px;
  padding: 12px 30px 12px 30px;
`
