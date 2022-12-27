import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {
  LinkItem,
  VideoImage,
  VideoDetailsContainer,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsAndPublishedDateContainer,
  ViewAndDate,
} from './styledComponents'

const VideoItem = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, viewCount, channel, publishedAt} = eachVideo
  const {name, profileImageUrl} = channel
  const distancedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <LinkItem>
      <VideoImage src={thumbnailUrl} alt={title} />
      <VideoDetailsContainer>
        <VideoImage isProfile src={profileImageUrl} alt="profile" />
        <VideoDetails>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>
          <ViewsAndPublishedDateContainer>
            <ViewAndDate>{viewCount} views </ViewAndDate>
            <BsDot color="#1e293b" size={20} />
            <ViewAndDate>{distancedDate}</ViewAndDate>
          </ViewsAndPublishedDateContainer>
        </VideoDetails>
      </VideoDetailsContainer>
    </LinkItem>
  )
}

export default VideoItem
