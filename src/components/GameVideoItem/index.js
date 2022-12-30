import {Link} from 'react-router-dom'
import {LinkItem, GameImage, GameTitle, ViewsCount} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const GameVideoItem = props => {
  const {eachVideo} = props

  const {thumbnailUrl, title, viewCount, id} = eachVideo

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <LinkItem>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle as="p" isDarkTheme={isDarkTheme}>
                {title}
              </GameTitle>
              <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
            </LinkItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameVideoItem
