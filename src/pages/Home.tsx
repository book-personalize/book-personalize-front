import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Contents = styled.div`
  width: 1100px;
  height: 1100px;
  padding-top: 64px;
  margin: 0 auto;
`

const Home: React.FC = () => (
  <div>
    <Header />
    <Contents>Contents</Contents>
    <Footer />
  </div>
)

export default Home
