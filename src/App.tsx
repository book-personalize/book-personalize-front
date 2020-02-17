import React from 'react'
import { Route } from 'react-router-dom'
import { Login, Main, Profile, Add } from './containers'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
      <div>
        <GlobalStyles/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/add' component={Add}/>
        {/*<Route exact path='/book' component={Book}/>*/}
        {/*<Route exact path='/edit' component={Edit}/>*/}
        <Route exact path='/login' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
      </div>
  )
}

export default App
