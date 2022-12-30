import Loader from 'react-loader-spinner'
import {
  Container,
  ImageContainer,
  Heading,
  Text,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

export const FailureView = props => {
  const {onCallApi} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          onCallApi()
        }

        return (
          <Container>
            <ImageContainer
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <Heading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </Heading>
            <Text>
              We are having some trouble to complete your request. Please try
              again.
            </Text>
            <RetryButton onClick={onClickRetry} type="button">
              Retry
            </RetryButton>
          </Container>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export const LoaderView = () => (
  <Container data-testid="loader">
    <Loader type="ThreeDots" color="#000000" height="50" width="50" />
  </Container>
)
