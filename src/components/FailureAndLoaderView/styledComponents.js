import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.img`
  height: 360px;
  width: 350px;
`

export const Heading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-family: Roboto;
  font-size: 20px;
  line-height: 0.5;
`
export const Text = styled.p`
  color: #1e293b;
  font-family: Roboto;
  font-size: 20px;
  line-height: 0.5;
`
export const RetryButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #4f46e5;
  font-weight: 600;
  font-size: 15px;
  color: #f1f1f1;
  border-radius: 8px;
  padding: 12px 30px 12px 30px;
`
