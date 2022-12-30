import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  isVideoSaved: false,
  toggleTheme: () => {},
  savedVideosList: [],
  updateSavedVideosList: () => {},
  activeMenu: 'Home',
  changeMenu: () => {},
  removeFromSavedVideos: () => {},
  addToSavedVideos: () => {},
})

export default NxtWatchContext
