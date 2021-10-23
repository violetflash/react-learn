import { Portal } from '../Portal/Portal';
import { Container, Overlay } from "./styles";


export const OverlayingPopup = ({ children, onClose, isOpened }) => {
  if (!isOpened) return null;

  return (
    <Portal>
      <Container role="dialog">
        <Overlay role="button" tabIndex={0} onClick={onClose}/>
        {children}
      </Container>
    </Portal>
  );
};
