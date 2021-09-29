import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: block;
  margin: ${props => {
    if (props.addStyle && props.addStyle.includes('mlAuto')) {
      return "0 0 0 auto"
    }
    
    return "0 20px";
  }};
  padding: ${props => {
    if (props.addStyle && props.addStyle.includes('small')) {
      return "2px 5px"
    }

    return "10px 15px";
  }};
  border: none;
  border-radius: 4px;
  background-color: skyblue;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  box-shadow: 0 2px 0 #c4c4c4;
  cursor: pointer;

  &:active {
    position: relative;
    top: 2px;
    box-shadow: none;
  }
  
`;

export const ControlsContainer = styled.div`
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #000;
`;

export const CounterContainer = styled.span`
  margin: 20px;
  padding: 10px 15px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

export const InputFieldLabel = styled.label`
  display: block;
  width: 100%;
  margin: 20px;
`;

export const TextInputContainer = styled.input`
  padding: 10px 15px;
  width: 100%;
  font-size: 16px;
  background-color: #eee;
  border-radius: 4px;
  border: 2px solid #ccc;
  outline: transparent;
`;

export const TodoListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const TodoItemContainer = styled.li`
  position:relative;
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 25px;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid #ccc;


  &::before {
    content: attr(data-id);
    position:absolute;
    left: 0;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const TodoItemText = styled.span`
  margin-left: 15px;
  text-decoration: ${props => props.completed ? "line-through" : "none"};
  cursor: pointer;
`;
