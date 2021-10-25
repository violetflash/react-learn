import styled from 'styled-components/macro';
import { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0);
  }
  
  25% {
    transform: rotateZ(20deg);
  }
  
  50% {
    transform: rotateZ(-20deg);
  }
  
  100% {
    transform: rotateZ(0deg);
  }
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  border: 2px solid transparent;
  color: ${props => props.color || '#000'};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  ${props => props.primary && css`
    background-color: darkseagreen;
    
    &:hover {
      background-color: #6cb66c;
    }
  `}

  ${props => props.danger && css`
    background-color: darksalmon;
    
    &:hover {
      background-color: #ec7856;
    }
  `}

  ${props => props.outlined && css`
    background-color: transparent;
    border: 2px solid ${props => props.color || 'transparent'};
    

    &:hover {
      background-color: #eee6e4;
    }
  `}
`;

export const CircleButton = styled(StyledButton)`
  padding: ${props => props.padding || "10px"};
  border-radius: 50%;
  
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
`;
