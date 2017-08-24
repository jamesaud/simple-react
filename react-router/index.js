import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './modules/Home'

// insert into index.js
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'


render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'))