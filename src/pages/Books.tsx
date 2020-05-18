import React, { useCallback } from 'react'

import styled from 'styled-components'
import Card from '../components/Card'
import Img from '../assets/dummyImage.jpg'
import { useHistory } from 'react-router'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

const InnerContainer = styled.div`
  min-height: calc(100vh - 64px);
  margin: 32px auto 0;
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }
`

const SubHead = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  margin: 32px 0 16px;
`

const elements = [
  {
    title: '나는 나로 살기로 했다.',
    author: '김수현'
  },
  {
    title: '나는 나로 살기로 했다.',
    author: '김수현'
  },
  {
    title: '나는 나로 살기로 했다.',
    author: '김수현'
  },
  {
    title: '나는 나로 살기로 했다.',
    author: '김수현'
  },
  {
    title: '나는 나로 살기로 했다.',
    author: '김수현'
  }
]

const Books: React.FC = () => {
  const history = useHistory()

  const toDetail = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <Container>
      <InnerContainer>
        <div>
          <SubHead>에세이</SubHead>
          <div className="card-list">
            {elements.map(
              ({ title, author }, index) =>
                <Card
                  key={index}
                  title={title}
                  author={author}
                  img={Img}
                  onClick={() => history.push('/books/3')}
                />
            )}
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}

export default Books
