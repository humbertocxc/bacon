import React from 'react';

import { CardProps } from '../../types/Card';
import { CategoryProps } from '../../types/Category';
import { PhotoProps } from '../../types/Photo';
import { UserProps } from '../../types/User';

import Card from '../Card';
import CardModal from '../Modal/CardModal';
import CategoryModal from '../Modal/CategoryModal';

import { Cards, Container, Content, Header, Title } from './styles';

interface ListProps {
  key: string,
  data: CardProps[],
  category: CategoryProps,
  users: UserProps[],
  photos: PhotoProps[],
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>,
  setCategories: React.Dispatch<React.SetStateAction<CategoryProps[]>>
}


export default function List({ data, users, photos, category, setCards, setCategories }: ListProps ) {

  function handleGetPhoto(id: number){
    const user = users.filter(user => user.id === id)[0]
    const photo = user ? photos.filter(photo => photo.id === user.photo_id)[0] : ''
    return photo? photo.filename ? photo.filename : '' : ''
  }
  
  return (
    <Container droppableId={String(category.id)} >
      {(provided) => (
        <Content done={!category.addable} {...provided.droppableProps} ref={provided.innerRef} >
          <Header>
            <Title>{category.name}</Title>
            <CategoryModal
              setCards={setCards}
              setCategories={setCategories}
              data={data}
              category={category}
            />
          </Header>
          <Cards>
            { data.map((card, index) => (
              <Card 
                key={card.id}
                index={index} 
                data={card}
                photo={handleGetPhoto(card.user_id)}
                setCards={setCards}
              />
            )) }
            {category.addable && (
              <CardModal category={category} />
            )}
          </Cards>
          {provided.placeholder}
        </Content>
      )}
    </Container>
  );
}
