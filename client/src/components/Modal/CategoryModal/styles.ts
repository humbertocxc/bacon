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
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 24;
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: #555;
  font-size: .8rem;
  padding: 0 10px;
`;

export const Header = styled.form`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  margin: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.p``;

export const RemoveContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const RemoveText = styled.span`
  color: #555;
  font-size: .8rem;
  margin-right: 40px;
  margin-left: 60px;
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  background: transparent;
`;