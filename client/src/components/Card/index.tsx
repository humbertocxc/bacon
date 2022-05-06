import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MdDelete } from 'react-icons/md';
import api from '../../services/api';
import { DeleteCard } from '../../services/Card';

import { CardProps } from '../../types/Card';
import {
  Container,
  Title,
  Header,
  Label,
  Photo,
  Body,
  Footer,
  Description,
  Delete,
  Deadline
} from './styles';

interface Props {
  data: CardProps,
  index: number,
  photo: string,
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>
}


export default function Card({ data, index, photo, setCards }: Props) {
  function handleDeleteCard(id: number) {
    DeleteCard(id)

    api.get('cards')
      .then((response: { data: any; }) => setCards(response.data))
  }

  const date = new Date(data.deadline).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Draggable draggableId={String(data.id)} index={index} >
      {provided => (
        <Container
          isDragging={false}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Header>
            <Label color="#165198" />
          </Header>
          <Body>
            <Title>{data.title}</Title>
            { photo !== '' && <Photo src={`img/avatar/${photo}`} alt=""/> }
          </Body>
            <Description>{data.description}</Description>
          <Footer>
            <Delete type='button' onClick={() => handleDeleteCard(data.id)} >
              <MdDelete color='#999' />
            </Delete>
            <Deadline>{String(date)}</Deadline>
          </Footer>
        </Container>
      )}
    </Draggable>
  );
}
