import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import Summary from '../components/BookDetail/Summary'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

const InnerContainer = styled.div`
  width: 1100px;
  min-height: calc(100vh - 64px);
  margin: 24px auto 0;
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }
`

const BookDetail: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Container>
      <InnerContainer>
        <Summary
          image=""
          title="책 제목"
          author="작가"
        />
      </InnerContainer>
    </Container>
  )
}

export default BookDetail
