import React from 'react';
import styled from 'styled-components/macro';
import { CloseButton } from "../styles";

const Header = styled.header`
  
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
`;

const BackArrow = styled.button`
  
`;



const PopupHeader = ({ title, onClose = Function.prototype, onPrevArrowClick = Function.prototype}) => {
  return (
    <Header>
      <BackArrow onClick={onPrevArrowClick}>Назад</BackArrow>
      <CloseButton onClick={onClose}/>
      <Title>
        {title}
      </Title>
    </Header>
  );

};

export default PopupHeader;