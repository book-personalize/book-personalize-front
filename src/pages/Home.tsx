import * as React from 'react'
import styled from 'styled-components'
import Book from '../components/Home/Book'
import Card from '../components/Card/index'
import Img from '../assets/dummyImage.jpg'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

const InnerContainer = styled.div`
  width: 1100px;
  min-height: calc(100vh - 64px);
  margin: 32px auto 0;
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }
`

const ListTItle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  margin: 32px 0 16px;
`

const elements = ['one', 'two', 'three', 'four', 'five', 'six']

const Home: React.FC = () => (
  <Container>
    <InnerContainer>
      <Book />
      <ListTItle>판타지 소설 미리보기</ListTItle>
      <div className="card-list">
        {elements.map((value, index) => {
          return <Card key={index} title="나는 나로 살기로 했다." author="J. K. 롤링" img={Img}/>
        })}
      </div>
    </InnerContainer>
  </Container>
)

export default Home
