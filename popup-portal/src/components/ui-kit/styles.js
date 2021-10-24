import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const PopupContainerStyle = css`
  padding: 15px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #f8f8f8;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const PopupBody = styled.div`
  
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 4px;
  width: 34px;
  height: 34px;
  background-color: rgba(68, 83, 126, 0.5);
  transition: all 0.3s ease 0s;
  z-index: 10;

  &:hover {
    background-color: rgba(68, 83, 126, 0.7);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 7px;
    top: 16px;
    width: 20px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;