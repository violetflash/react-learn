import styled from 'styled-components/macro';
import { PopupContainerStyle } from "../styles";
import {OverlayingPopup} from "../OverlayingPopup/OverlayingPopup";
import PopupHeader from "../PopupHeader/PopupHeader";
import Button from "../Button/Button";

const DialogContainer = styled.div`
  ${PopupContainerStyle}
`;

const DialogControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ;
`;

export const Dialog = ({ isOpened, onClose, title, secondaryButtonText, primaryButtonText = null, onConfirmFunc = Function.prototype}) => {

  const confirmHandler = () => {
    onConfirmFunc();
    onClose();
  };

  const primaryButton = primaryButtonText ? <Button text={primaryButtonText} primary onClick={confirmHandler}/> :
    null;

  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <DialogContainer>
        <PopupHeader title={title} onClose={onClose}/>
        <DialogControls>
          {primaryButton}
          <Button text={secondaryButtonText} danger onClick={onClose}/>
          <Button text={secondaryButtonText} outlined color="green" onClick={onClose}/>
          <Button text={secondaryButtonText} outlined color="teal" circle padding="50px 10px" onClick={onClose}/>

        </DialogControls>
      </DialogContainer>
    </OverlayingPopup>
  );
};

export default Dialog;
