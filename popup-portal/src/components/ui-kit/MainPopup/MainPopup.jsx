import { OverlayingPopup } from "../OverlayingPopup/OverlayingPopup";
import { Container } from "../OverlayingPopup/styles";

export const MainPopup = ({
  isOpened,
  onPrevArrowClick,
  title,
  onClose,
  className,
  children,
}) => {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <Container>

      </Container>

    </OverlayingPopup>
  );
};
