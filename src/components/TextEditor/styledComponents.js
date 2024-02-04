import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageTextContainer = styled.div`
  background-color: #1b1c22;
  height: 70vh;
  width: 60%;
  border-radius: 10px;
  display: flex;
`

export const ImageCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 100%;
`
export const TextHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: #f8fafc;
  margin-top: 50px;
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 100px;
`
export const TextContainer = styled.div`
  height: 92%;
  width: 40%;
  border: 1px solid #cbd5e1;
  background-color: #334155;
  border-radius: 10px;
  margin: 20px;
`
export const IconContainer = styled.ul`
  padding-left: 20px;
  list-style-type: none;
  display: flex;
`
export const ListItem = styled.li`
  margin: 0px;
`

export const BoldButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-right: 10px;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-right: 10px;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-right: 10px;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 86%;
  background-color: #334155;
  padding-left: 10px;
  color: #ffffff;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
