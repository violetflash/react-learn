import { Portal } from '../Portal/Portal';
import { OverlayingContainer, Overlay } from "./styles";


export const OverlayingPopup = ({ children, onClose, isOpened }) => {
  if (!isOpened) return null;

  return (
    <Portal>
      <OverlayingContainer role="dialog">
        <Overlay role="button" tabIndex={0} onClick={onClose}/>
        {children}
      </OverlayingContainer>
    </Portal>
  );
};
