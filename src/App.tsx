import React from 'react'
import { Route } from 'react-router-dom'
import { Add, Detail, Home, Books, Profile } from './pages'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
      <div>
        <GlobalStyles/>
        <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={Add}/>
          <Route exact path="/books/1" component={Detail}/>
          <Route exact path="/books" component={Books}/>
          <Route exact path="/profile" component={Profile}/>
        <Footer />
      </div>
  )
}

export default App
