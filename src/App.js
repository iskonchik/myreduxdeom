import React from 'react';

import './App.css';
import {BrowserRouter as Router,
Switch,
Route,
Redirect,} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage.js'
import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App