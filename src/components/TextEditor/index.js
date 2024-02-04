import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  ImageTextContainer,
  ImageCon,
  TextHeading,
  Image,
  TextContainer,
  IconContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const boldColor = isBold === false ? '#f1f5f9' : ' #faff00'

    const italicColor = isItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineColor = isUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = isBold === true ? 'bold' : 'normal'

    const fontStyle = isItalic === true ? 'italic' : 'normal'

    const textDecoration = isUnderline === true ? 'underline' : 'normal'

    return (
      <BgContainer>
        <ImageTextContainer>
          <ImageCon>
            <TextHeading>Text Editor</TextHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageCon>
          <TextContainer>
            <IconContainer>
              <ListItem>
                <BoldButton
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickBold}
                  color={boldColor}
                >
                  <VscBold size={25} />
                </BoldButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italicColor}
                  type="button"
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListItem>
              <ListItem>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underlineColor}
                  type="button"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListItem>
            </IconContainer>
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </TextContainer>
        </ImageTextContainer>
      </BgContainer>
    )
  }
}
export default TextEditor
