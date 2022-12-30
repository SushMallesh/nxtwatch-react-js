import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

const activeMenuConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
  isVideoSaved: false,
}

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    activeMenu: activeMenuConstants.home,
    isVideoSaved: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  removeFromSavedVideos = savedVideo => {
    const {savedVideosList} = this.state
    this.setState({
      savedVideosList: savedVideosList.filter(
        eachVideo => eachVideo.id !== savedVideo.id,
      ),
    })
  }

  addToSavedVideos = newVideo => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, newVideo],
    }))
  }

  updateSavedVideo = video => {
    const {isVideoSaved} = this.state
    if (isVideoSaved) {
      this.removeFromSavedVideos(video)
    } else {
      this.addToSavedVideos(video)
    }
  }

  updateSavedVideosList = savedVideo => {
    this.setState(
      prevState => ({isVideoSaved: !prevState.isVideoSaved}),
      this.updateSavedVideo(savedVideo),
    )
  }

  changeMenu = activeMenu => {
    this.setState({activeMenu})
  }

  render() {
    const {isDarkTheme, isVideoSaved, savedVideosList, activeMenu} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          isVideoSaved,
          activeMenu,
          changeMenu: this.changeMenu,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
          savedVideosList,
          updateSavedVideosList: this.updateSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
