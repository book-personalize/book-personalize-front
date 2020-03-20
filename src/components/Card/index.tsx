import React from 'react'

import { CardContainer, ImageContainer, Image, Hover, Title, Author } from './Card.style'

interface IProps {
  title: string
  author: string
  img: string
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}

const Card: React.FC<IProps> = ({ title, author, img, onClick }) => (
  <CardContainer onClick={onClick}>
    <ImageContainer>
      <Image src={img} alt={title} />
      <Hover/>
    </ImageContainer>
    <Title>{ title }</Title>
    <Author>{ author }</Author>
  </CardContainer>
)

export default Card
