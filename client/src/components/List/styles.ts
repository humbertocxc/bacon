import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

interface ContentProps {
  done: boolean
}


export const Container = styled(Droppable)``;

export const Content = styled.div<ContentProps>`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: #555;
  font-size: .8rem;
  padding: 0 10px;
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const Cards = styled.ul`
  margin-top: 30px;
  align-items: center;
  margin-bottom: 10px;
`;