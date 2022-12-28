import {Component} from 'react'
import Cookies from 'js-cookie'
import {VideoItemDetailsContainer} from './styledComponents'

class VideoItemDetails extends Component {
  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    // const jwtToken = Cookies.get('access_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(videoItemDetailsApiUrl)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <VideoItemDetailsContainer>video</VideoItemDetailsContainer>
  }
}

export default VideoItemDetails
