import React from 'react'
import styled from 'styled-components'

interface IProps {
  image: string;
  title: string;
  author: string;
}

const StyledSummary = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 360px;
  height: 480px;
  background: black;
  margin-right: 32px;
`

const Contents = styled.div`
`

const Title = styled.h1`

`

const SubTitle = styled.p``

const Summary: React.FC<IProps> = ({ image, title, author }) => {
  return (
    <StyledSummary>
      <Image src={image}/>
      <Contents>
        <Title>{ title }</Title>
        <SubTitle>{ author }</SubTitle>
      </Contents>
    </StyledSummary>
  )
}
export default Summary
