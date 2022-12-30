import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

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
  const {eachVideo, isTrending} = props
  const {thumbnailUrl, title, viewCount, channel, publishedAt, id} = eachVideo
  const {name, profileImageUrl} = channel
  const distancedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <LinkItem isTrending={isTrending}>
              <VideoImage
                isTrending={isTrending}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoDetailsContainer isTrending={isTrending}>
                {!isTrending && (
                  <VideoImage isProfile src={profileImageUrl} alt="profile" />
                )}
                <VideoDetails>
                  <VideoTitle isDarkTheme={isDarkTheme} isTrending={isTrending}>
                    {title}
                  </VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndPublishedDateContainer>
                    <ViewAndDate>{viewCount} views </ViewAndDate>
                    <BsDot color="#1e293b" size={20} />
                    <ViewAndDate>{distancedDate}</ViewAndDate>
                  </ViewsAndPublishedDateContainer>
                </VideoDetails>
              </VideoDetailsContainer>
            </LinkItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
