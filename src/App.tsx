import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

import { ThemeProvider } from 'styled-components'

import { Add, Detail, Home, Books, Profile, Join, Login } from './pages'
import PageTemplate from './components/Template/PageTemplate'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <PageTemplate>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/join" component={Join}/>
          <Route path="/login" component={Login}/>
          <Route path="/add" component={Add}/>
          <Route path="/books/:key" component={Detail}/>
          <Route path="/books" component={Books}/>
        </Switch>
      </PageTemplate>
    </ThemeProvider>
  )
}

export default App
