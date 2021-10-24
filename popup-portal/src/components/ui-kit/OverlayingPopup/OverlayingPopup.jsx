import { useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import { OverlayingContainer, Overlay } from "./styles";
import {useKeypress} from "../../hooks/useKeypress/useKeypress";


export const OverlayingPopup = ({ children, onClose, isOpened }) => {
  const escapePressed = useKeypress('Escape');

  useEffect(() => {
    if (escapePressed) {
      onClose();
    }
  }, [escapePressed, onClose])

  if (!isOpened) return null;

  return (
    <Portal>
      <OverlayingContainer role="dialog" tabIndex="1">
        <Overlay role="button" tabIndex={0} onClick={onClose}/>
        {children}
      </OverlayingContainer>
    </Portal>
  );
};
