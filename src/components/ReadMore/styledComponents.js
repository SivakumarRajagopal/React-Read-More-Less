// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align: center;
  width: 60%;
  margin: auto;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 30px;
  align-self: center;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 16px;
  align-self: center;
`

export const ImgElement = styled.img`
  height: 200px;
  align-self: center;
`

export const ContentElement = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 14px;
`

export const CustomButton = styled.button`
  background-color: #1f81ff;
  padding: 5px 10px;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  outline: none;
  align-self: center;
  border-radius: 8px;
`
