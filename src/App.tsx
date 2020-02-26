import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'

import { Add, Detail, Home, Books, Profile, Join, Login } from './pages'
import Header from './components/Header';
import Footer from './components/Footer';

const Contents = styled.div`
  min-height: 100vh;
  padding-top: 64px;
`

const App: React.FC = () => {
  return (
      <div>
        <GlobalStyles/>
        <Header />
          <Contents>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add" component={Add}/>
            <Route exact path="/books/1" component={Detail}/>
            <Route exact path="/books" component={Books}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/join" component={Join}/>
            <Route exact path="/login" component={Login}/>
          </Contents>
        <Footer />
      </div>
  )
}

export default App
