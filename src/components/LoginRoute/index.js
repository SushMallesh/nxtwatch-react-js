import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginRouteContainer,
  ResponsiveContainer,
  LoginFormContainer,
  WebSiteLogo,
  InputLabel,
  CustomInput,
  UserCredentialsContainer,
  UserDetailsContainer,
  CheckBoxContainer,
  CustomCheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const logoLightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const logoDarkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
console.log(logoDarkThemeUrl)
class LoginRoute extends Component {
  state = {
    password: '',
    username: '',
    errMsg: '',
    showErrMsg: false,
    isPasswordShown: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('access_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  onLogin = async event => {
    event.preventDefault()

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(loginApiUrl, options)

    if (response.ok === true) {
      const fetchJwtToken = await response.json()
      this.onLoginSuccess(fetchJwtToken.jwt_token)
    } else {
      const error = await response.json()

      this.onLoginFailure(error.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    this.setState({isPasswordShown: event.target.checked})
  }

  renderUserNameInput = () => {
    const {username} = this.state

    return (
      <UserCredentialsContainer>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <CustomInput
          value={username}
          onChange={this.onChangeUsername}
          id="username"
          placeholder="Username"
          type="text"
        />
      </UserCredentialsContainer>
    )
  }

  renderShowPassword = () => (
    <CheckBoxContainer>
      <CustomCheckBox
        onChange={this.onShowPassword}
        type="checkbox"
        id="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
    </CheckBoxContainer>
  )

  renderPasswordInput = () => {
    const {password, isPasswordShown} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <UserCredentialsContainer>
              <InputLabel isDarkTheme={isDarkTheme} htmlFor="password">
                PASSWORD
              </InputLabel>
              <CustomInput
                value={password}
                onChange={this.onChangePassword}
                id="password"
                placeholder="Password"
                type={isPasswordShown ? 'text' : 'password'}
              />
              {this.renderShowPassword()}
            </UserCredentialsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderUserCredentialsInput = () => (
    <UserDetailsContainer>
      {this.renderUserNameInput()}
      {this.renderPasswordInput()}
    </UserDetailsContainer>
  )

  render() {
    const {errMsg, showErrMsg, username, password, isPasswordShown} = this.state
    const accessToken = Cookies.get('access_token')
    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const webSiteLogo = isDarkTheme ? logoDarkThemeUrl : logoLightThemeUrl

          return (
            <LoginRouteContainer isDarkTheme={isDarkTheme}>
              <ResponsiveContainer isDarkTheme={isDarkTheme}>
                <LoginFormContainer onSubmit={this.onLogin}>
                  <WebSiteLogo src={webSiteLogo} alt="website logo" />
                  <UserDetailsContainer>
                    <UserCredentialsContainer>
                      <InputLabel isDarkTheme={isDarkTheme} htmlFor="username">
                        USERNAME
                      </InputLabel>
                      <CustomInput
                        value={username}
                        onChange={this.onChangeUsername}
                        id="username"
                        placeholder="Username"
                        type="text"
                      />
                    </UserCredentialsContainer>
                    <UserCredentialsContainer>
                      <InputLabel isDarkTheme={isDarkTheme} htmlFor="password">
                        PASSWORD
                      </InputLabel>
                      <CustomInput
                        value={password}
                        onChange={this.onChangePassword}
                        id="password"
                        placeholder="Password"
                        type={isPasswordShown ? 'text' : 'password'}
                      />
                      <CheckBoxContainer>
                        <CustomCheckBox
                          onChange={this.onShowPassword}
                          type="checkbox"
                          id="checkbox"
                        />
                        <CheckBoxLabel
                          isDarkTheme={isDarkTheme}
                          htmlFor="checkbox"
                        >
                          Show Password
                        </CheckBoxLabel>
                      </CheckBoxContainer>
                    </UserCredentialsContainer>
                  </UserDetailsContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrMsg && <ErrorMessage>*{errMsg}</ErrorMessage>}
                </LoginFormContainer>
              </ResponsiveContainer>
            </LoginRouteContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
