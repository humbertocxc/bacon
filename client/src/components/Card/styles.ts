import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean,
}

interface LabelProps {
  color: string,
}


export const Container = styled.div<ContainerProps>`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;

export const Header = styled.header`
  position: absolute;
  top: -22px;
  left: 15px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20%;
  padding-left: 10%;
  align-items: center;
  margin-bottom: 5%;
`

export const Title = styled.h3`
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;

export const Photo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-top: 5px;
`;

export const Footer = styled.footer`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const Deadline = styled.p`
  font-size: .7rem;
  font-weight: thin;
  font-collor: #555;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Delete = styled.button`
  position: relative;
  float: right;
  border: none;
  font-size: 1.25rem;
  background: transparent;
  cursor: pointer;
`;
