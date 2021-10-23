import styled from 'styled-components/macro';
import { PopupContainerStyle } from "../styles";
import {OverlayingPopup} from "../OverlayingPopup/OverlayingPopup";
import PopupHeader from "../PopupHeader/PopupHeader";

const PopupContainer = styled.div`
  ${PopupContainerStyle}
`;

const Dialog = ({ children, isOpened, onClose, title, primaryButtonText, secondaryButtonText }) => {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <PopupContainer>
        <PopupHeader title={title} onClose={onClose}/>
        {children}
      </PopupContainer>
    </OverlayingPopup>
  );

};

export default Dialog;