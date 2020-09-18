import styled from 'styled-components'
import Display from './typographic/Display'

const MessageBox = styled.div`
  cursor: pointer;
  opacity: ${props => props.showAlertMessage ? 1 : 0};
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
  transition: opacity 0.25s;
  overflow: hidden;
`

const MessageTitle = styled.div`
  box-sizing: border-box;
  border-bottom: inherit;
  padding: 12px;
  background-color: ${props => props.theme.colors.bg.secondary};
`

const MessageText = styled.div`
  box-sizing: border-box;
  padding: 12px;
`

const AlertMessage = ({ showAlertMessage, hideAlertMessage }) => (
  <MessageBox 
    onClick={hideAlertMessage}
    showAlertMessage={showAlertMessage}
  >
    <MessageTitle>
      <Display size='small'>
        Nominees Full
      </Display>
    </MessageTitle>
    <MessageText>
      You have already selected 5 movies to nominate. If you would like to select another movie, please remove one of the movies you have already selected.
    </MessageText> 
  </MessageBox>
)

export default AlertMessage