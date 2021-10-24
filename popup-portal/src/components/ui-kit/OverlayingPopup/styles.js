import styled from "styled-components/macro";

export const OverlayingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 36px;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;