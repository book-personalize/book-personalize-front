import * as React from 'react'
import styled from 'styled-components'
import SectionBg from '../components/Home/SectionBg'
import Card from '../components/Card/index'

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

const elements = ['one', 'two', 'three']

const Home: React.FC = () => (
  <Container>
    <SectionBg />
    <InnerContainer>
      <div className="card-list">
        {elements.map((value, index) => {
          return <Card key={index} />
        })}
      </div>
    </InnerContainer>
  </Container>
)

export default Home