import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Display from './typographic/Display'
import { CancelSmallMinor } from '@shopify/polaris-icons'

const MessageBox = styled.div`
  cursor: default;
  display: ${props => props.showAlertMessage ? 'block' : 'none'}; /* totally dispppear to prevent conflict on hide*/
  height: 180px;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: ${props => props.theme.spacing.tight};
  box-sizing: border-box;
  border: solid 1px ${props => props.theme.colors.bg.secondary};
  background-color: ${props => props.theme.colors.bg.primary};
  box-shadow: 0px 0px 20px 5px ${props => props.theme.colors.bg.primary};
  overflow: hidden;
  opacity: ${props => props.visible ? 1 : 0}; /* visible set as effect after display is block to enable fade in to happen */
  transition: opacity 0.25s;
`

const MessageTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  box-sizing: border-box;
  border-bottom: inherit;
  padding: 12px;
  background-color: ${props => props.theme.colors.bg.secondary};
`

const IconWrapper = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.text.secondary};
  transition: fill 0.2s;

  &:hover {
    fill: ${props => props.theme.colors.text.primary};
  }
`

const MessageText = styled.div`
  box-sizing: border-box;
  padding: 12px;
`

const AlertMessage = ({ showAlertMessage, hideAlertMessage }) => {
  const [visible, setVisible] = useState(false)

  // set visible as effect as it allows fade in after display: block
  useEffect(() => {
    if (showAlertMessage) {
      setVisible(true)
    }
  }, [showAlertMessage])

  const handleCloseClick = () => {
    // transition opacity
    setVisible(false)
    // trigger callback after opacity transition fade out to fully disappear element
    setTimeout(() => {
      hideAlertMessage()
    }, 200)
  }

  return(
    <MessageBox 
      showAlertMessage={showAlertMessage}
      visible={visible}
    >
      <MessageTitle>
        <Display size='small'>
          Nominees Full
        </Display>
        <IconWrapper
          onClick={handleCloseClick}
        >
          <CancelSmallMinor />
        </IconWrapper>
      </MessageTitle>
      <MessageText>
        You have already selected 5 movies to nominate. If you would like to select another movie, please remove one of the movies you have already selected.
      </MessageText> 
    </MessageBox>
  )
}

export default AlertMessage