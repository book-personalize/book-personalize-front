import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
            <Switch>
              <Route path="/profile" component={Profile}/>
              <Route path="/join" component={Join}/>
              <Route path="/login" component={Login}/>
              <Route path="/add" component={Add}/>
              <Route path="/books/:key" component={Detail}/>
              <Route path="/books" component={Books}/>
            </Switch>
          </Contents>
        <Footer />
      </div>
  )
}

export default App
