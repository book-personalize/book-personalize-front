import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
      <div>
        <GlobalStyles/>
        <Route exact path="/" component={Home}/>
      </div>
  )
}

export default App
