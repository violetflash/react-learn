import styled from 'styled-components/macro';

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => {
      if (props.confirm) return 'forestgreen';
      if (props.danger) return 'tomato';
    }};
  }
`;