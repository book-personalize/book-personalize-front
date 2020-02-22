import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
      <div>
        <GlobalStyles/>
        <Header />
          <Route exact path="/" component={Home}/>
        <Footer />
      </div>
  )
}

export default App
