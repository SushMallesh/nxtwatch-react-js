import styled from 'styled-components'

export const LinkItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
  width: 30%;
`
export const VideoImage = styled.img`
  height: ${props => (props.isProfile ? '36px' : '150px')};
  width: ${props => (props.isProfile ? '36px' : '228px')};
  margin: ${props => props.isProfile && '15px 8px 0px 0px'};
`
export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const VideoTitle = styled.p`
  color: #424242;
  font-family: 'Roboto';
  font-size: 14px;
  max-width: 160px;
  line-height: 1.5;
`
export const VideoDetails = styled(VideoDetailsContainer)`
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0;
`
export const ViewsAndPublishedDateContainer = styled(VideoDetailsContainer)`
  align-items: center;
`
export const ViewAndDate = styled.span`
  color: #616e7c;
  font-size: 13px;
  font-family: 'Roboto';
`
