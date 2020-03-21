import React from 'react'
import styled from 'styled-components'

import BookGrade from '..//BookGrade'

interface IProps {
  image: string
  title: string
  author: string
  genre: string
}

const StyledSummary = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`

const Image = styled.img`
  width: 360px;
  height: 480px;
  background: black;
  margin-right: 32px;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`

const SubTitle = styled.p`
  font-size: 16px;
  margin: 16px 0;
`

const Summary: React.FC<IProps> = ({ image, title = '나는 나로 살기로 했다.', author = '김수현', genre }) => {
  return (
    <StyledSummary>
      <Image src={image}/>
      <div>
        <SubTitle>{ genre }</SubTitle>
        <Title>{ title }</Title>
        <SubTitle>저자 { author }</SubTitle>
        <BookGrade grade={4} isShowGrade={true}/>
      </div>
    </StyledSummary>
  )
}
export default Summary
