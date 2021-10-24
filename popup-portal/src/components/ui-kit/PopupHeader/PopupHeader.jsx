import React from 'react';
import styled from 'styled-components/macro';
import { CloseButton } from "../styles";

const Header = styled.header`
  position: relative;
  padding: 40px 0 0 0;
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
`;

const BackArrow = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  
  &::before {
    content: "<--";
    position: absolute;
  }
  
`;



const PopupHeader = ({ title, onClose = Function.prototype, onPrevArrowClick = Function.prototype}) => {
  return (
    <Header>
      <BackArrow onClick={onPrevArrowClick}/>
      <CloseButton onClick={onClose}/>
      <Title>
        {title}
      </Title>
    </Header>
  );

};

export default PopupHeader;