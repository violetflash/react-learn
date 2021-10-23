import styled from 'styled-components/macro';
import { OverlayingPopup } from "../index";
import PopupHeader from "../PopupHeader/PopupHeader";
import { PopupContainerStyle } from "../styles";

const PopupContainer = styled.div`
  ${PopupContainerStyle};
  width: 440px;
  max-height: 770px;
`;

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
      <PopupContainer>
        <PopupHeader
          title={title}
          onClose={onClose}
          onPrevArrowClick={onPrevArrowClick}
        />
        {children}
      </PopupContainer>
    </OverlayingPopup>
  );
};
