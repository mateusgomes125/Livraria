import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { AuthProvider } from './contexts/authContext'
import Livro from './components/livro'
import Menu from './components/menu'
import Home from './components/home'
import Tabela from './components/livro/tabela'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" render={ () => <Livro/>}/>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
