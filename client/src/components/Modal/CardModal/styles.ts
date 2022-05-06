import { Box } from "@mui/material";
import { transparentize } from "polished";
import styled from "styled-components";


export const Container = styled(Box)`
  width: 100vw;
  heigth: 100vh;
  padding: 100%;
  background: ${transparentize(0.5, '#000')};
`;

export const Content = styled.div`
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: row;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background: white;
  box-shadow: 24;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`

export const NewCard = styled.form`
  background: transparent;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  margin-top: -20px;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-weight: 500;
  color: #555;
  font-size: .8rem;
  padding: 0 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Inputs = styled.div`
  padding: 5px;
  border-radius: 20rem;
  background: transparent;
  margin-top: 10px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const Input = styled.input`
  margin: 5px;
  height: 100%;
  padding-left: 5%;
  width: 100%;
  background: transparent;
  border: none;
`;

export const Deadline = styled.div`
  display: flex;
`

export const RemoveContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;

export const RemoveText = styled.span`
  color: #555;
  font-size: .8rem;
  margin-right: 40px;
  margin-left: 60px;
`;

