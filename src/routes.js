import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import ResultsContainer from './containers/ResultsContainer'
import NotFound from './components/NotFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/:module" render={(props) => <ResultsContainer test={props} /> }/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes