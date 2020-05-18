import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Add, BookDetail, Home, Books, Profile, Join, Login } from './pages'
import PageTemplate from './components/Template/PageTemplate'


const App: React.FC = () => {
  return (
    <PageTemplate>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/join" component={Join}/>
        <Route path="/login" component={Login}/>
        <Route path="/add" component={Add}/>
        <Route path="/books/:key" component={BookDetail}/>
        <Route path="/books" component={Books}/>
      </Switch>
    </PageTemplate>
  )
}

export default App
