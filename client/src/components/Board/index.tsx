import React, { useEffect, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';

import api from '../../services/api'
import { CreateCategory } from '../../services/Category';
import List from '../List';
import { CategoryProps } from '../../types/Category';
import { CardProps } from '../../types/Card';
import { UserProps } from '../../types/User';
import { PhotoProps } from '../../types/Photo';

import { Container, Content, Add, Input, Button } from './styles';
import { MdAdd } from 'react-icons/md';


export default function Board() {
  const [ categories, setCategories ] = useState<CategoryProps[]>([])
  const [ cards, setCards ] = useState<CardProps[]>([])
  const [ users, setUsers ] = useState<UserProps[]>([])
  const [ photos, setPhotos ] = useState<PhotoProps[]>([])
  const [ name, setName ] = useState('')

  useEffect(() => {
    try{
    api.get('cards')
      .then(response  => setCards(response.data))
    
    api.get('categories')
      .then(response => setCategories(response.data))
    
    api.get('users')
      .then(response => setUsers(response.data))
    
    api.get('photos')
      .then(response => setPhotos(response.data))
    } catch(e){}
  }, [])

  console.log('veio aqui\n')

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return

    var newCard = cards.filter(card => card.id === Number(draggableId))[0]
    newCard = {
      ...newCard,
      category_id: Number(destination.droppableId)
    }

    api.put(`cards/${draggableId}`, newCard)

    setCards(cards.map(card => {
      if( card.id === newCard.id ){
        return newCard
      }
      return card
    }))
  }

  function handleAddCategory() {
    CreateCategory(name)
  }

  console.log(cards, categories, photos, users)

  return (
    <Container onDragEnd={onDragEnd} >
      <Content>
        {categories.map(category =>
          <List
            key={category.name}
            category={category}
            data={cards.filter(card => card.category_id === category.id)}
            users={users}
            photos={photos}
            setCards={setCards}
            setCategories={setCategories}
          />
        )}
        <Add>
          <Input
            type='text'
            placeholder='Nova Categoria'
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Button type="submit" onClick={() => handleAddCategory()} >
            <MdAdd size={16} color="#777" />
          </Button>
        </Add>
      </Content>
    </Container>
  );
}
