import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';


export const Container = styled(DragDropContext)`
  padding: 30px 0;
  height: calc(100% - 100px);
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Add = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  margin-bottom: 0;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: .8rem;
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  background: transparent;
`;
