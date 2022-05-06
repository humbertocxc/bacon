import { Modal } from "@mui/material"
import React, { useState } from "react"
import { MdDelete, MdEdit } from "react-icons/md"
import api from "../../../services/api"
import { DeleteCategory } from "../../../services/Category"
import { CardProps } from "../../../types/Card"
import { CategoryProps } from "../../../types/Category"
import CardModal from "../CardModal"
import { Button, Container, Content, Header, Input, InputContainer, Inputs, RemoveContainer, RemoveText, Text, Title } from "./styles"

interface Props {
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>,
  setCategories: React.Dispatch<React.SetStateAction<CategoryProps[]>>,
  data: CardProps[],
  category: CategoryProps,
}


export default function CategoryModal({ setCategories, data, category }: Props ) {
  const [name, setName] = useState(category.name);
  const [isActive, setIsActive] = useState(category.isActive);
  const [addable, setAddable] = useState(category.addable);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleDeleteCategory() {
    if(data.length > 0) {
      alert('Impossível deletar uma categoria que não está vazia')
    }else{
      DeleteCategory(category.id)
      api.get('categories')
        .then(response => setCategories(response.data))
    }
  }

  function handleUpdateCategory() {
    api.put(`categories/${category.id}`, {
      name,
      isActive,
      addable
    })
  }

  return(
    <>
      <Button type="submit" onClick={() => handleOpen()} >
        <Title>...</Title>
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <Container>
          <Content>
            <Header>
              <Inputs>
                <Input
                  type='text'
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <InputContainer>
                  <Input
                    type='checkbox'
                    checked={isActive}
                    onChange={event => setIsActive(!isActive)}
                  />
                  <Text>Ativo</Text>
                </InputContainer>
                <InputContainer>
                  <Input
                    type='checkbox'
                    checked={addable}
                    onChange={event => setAddable(!addable)}
                  />
                  <Text>Adicionável</Text>
                </InputContainer>
              </Inputs>
              <Button type="submit" onClick={() => handleUpdateCategory()} >
                <MdEdit size={20} color="#777" />
              </Button>
            </Header>
            {category.addable && (
              <InputContainer>
                <Text>Adicionar cartão</Text>
                <CardModal category={category} />
              </InputContainer>
            )}
            <RemoveContainer>
              <RemoveText>Deletar lista </RemoveText>
              <Button type="submit" onClick={() => handleDeleteCategory()} >
                <MdDelete size={20} color="#777" />
              </Button>
            </RemoveContainer>
          </Content>
        </Container>
      </Modal>
    </>
  )
}