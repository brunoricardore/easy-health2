import styled from "styled-components";

export const StyledCard = styled.div<{width?: string}>`
  background-color: #fff;
  border-radius: 5px;
  padding: 8px;

`;

interface CardProps {
  children?: React.ReactNode;
  width?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};
