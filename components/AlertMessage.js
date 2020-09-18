import styled from 'styled-components'

const MessageBox = styled.div`
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
  border: solid 1px ${props => props.theme.colors.text.secondary};
  padding: 12px;
  background-color: ${props => props.theme.colors.bg.secondary};
  box-shadow: 0px 0px 20px 5px ${props => props.theme.colors.bg.primary};
  transition: opacity 0.25s;
`

const AlertMessage = ({ showAlertMessage, hideAlertMessage }) => (
  <MessageBox 
    onClick={hideAlertMessage}
    showAlertMessage={showAlertMessage}
  >
    Nominees Full.
  </MessageBox>
)

export default AlertMessage