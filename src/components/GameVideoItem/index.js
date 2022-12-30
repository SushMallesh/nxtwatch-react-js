import {LinkItem, GameImage, GameTitle, ViewsCount} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const GameVideoItem = props => {
  const {eachVideo} = props

  const {thumbnailUrl, title, viewCount} = eachVideo

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkItem>
            <GameImage src={thumbnailUrl} alt={title} />
            <GameTitle isDarkTheme={isDarkTheme}>{title}</GameTitle>
            <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
          </LinkItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameVideoItem
