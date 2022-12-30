import styled from 'styled-components'

export const AppVideoDetailsContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1150px;
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

export const VideoDetailsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-left: 0;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f1f1')};
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#383838')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 450;
  line-height: 3.5;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const ViewsAndPublishedDateContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewAndDate = styled.p`
  color: #616e7c;
  font-size: 16px;
  font-family: 'Roboto';
`
export const LikesAndDisLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`

export const DisLikeButton = styled(Button)`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`

export const LikeButton = styled(Button)`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled(Button)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const LikeDisLikeText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 5px;
`
export const SaveText = styled(LikeDisLikeText)`
  font-size: 18px;
`
export const SeparatorLine = styled.hr`
  width: 95%;
  margin-left: 0;
  margin-top: 28px;
  border: 1px solid #cccccc;
`

export const TitleAndSubscribersContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  align-self: flex-start;
  margin-top: 24px;
`
export const SubscriberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const SubscribersCount = styled(ViewAndDate)`
  font-size: 13px;
`

export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#313131')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
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
