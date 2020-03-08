import * as React from 'react'

import { CardContainer, Image, Title, Author } from './Card.style'

interface IProps {
  title: string;
  author: string;
  img: string;
}

const Card: React.FC<IProps> = ({ title, author, img }) => (
  <CardContainer>
    <Image src={img} alt={title} />
    <Title>{ title }</Title>
    <Author>{ author }</Author>
  </CardContainer>
)

export default Card
