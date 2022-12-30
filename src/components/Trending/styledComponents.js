import styled from 'styled-components'

export const AppTrendingContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1100px;
  }
`

export const TrendingContainer = styled.div`
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

export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'transparent')};
`
export const TrendingBannerContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  height: 120px;
  width: 100%;
`
export const TrendingBanner = styled.div`
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

export const TrendingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  background-color: ;
  margin-top: 0;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f5f9')};
`
