import { Modal } from "@mui/material";
import React, { useState } from "react"
import { MdAdd } from "react-icons/md"
import { CreateCard } from "../../../services/Card";
import { CategoryProps } from "../../../types/Category";
import { Button, CardContainer, Container, Content, Deadline, Header, Input, Inputs, NewCard, RemoveText, Title } from "./styles"

interface Props {
  category: CategoryProps,
}


export default function CardModal( { category }: Props ) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  // const [user, setUser] = useState(1);
  // const [name, setName] = useState(category.name);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  function handleAddCard() {

    CreateCard({
      title,
      category_id: category.id,
      user_id: 1,
      description,
      deadline: new Date(deadline)
    })
  }
  return(
    <>
      <Button type="submit" onClick={() => handleOpen()} >
        <MdAdd size={16} color="#777" />
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <Container>
          <Content>
            <NewCard>
              <Header>
                <Title>Adicionar Cartão a {category.name} </Title>
                <Button type="submit" onClick={() => handleAddCard()} >
                  <MdAdd size={24} color="#777" />
                </Button>
              </Header>
              <CardContainer>
                <Inputs>
                  <Input
                    type='text'
                    placeholder='Tarefa'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                  />
                  <Input
                    type='text'
                    placeholder='Descrição da tarefa'
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                  />
                  <Deadline>
                    <RemoveText style={{marginLeft: "20px", marginRight: "0"}} >
                      Prazo de entrega
                    </RemoveText>
                    <Input
                      type='date'
                      placeholder='Prazo de entrega'
                      value={deadline}
                      onChange={event => setDeadline(event.target.value)}
                    />
                  </Deadline>
                </Inputs>
              </CardContainer>
            </NewCard>
          </Content>
        </Container>
      </Modal>
    </>
  )
}