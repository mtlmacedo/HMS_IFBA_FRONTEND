import React, { Fragment } from 'react';
import './App.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './layout/Header';
import Dashboard from './reservas/Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './components/common/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>     
        <body>      
          <Header/>            
            <Container>  
            <div className="App">            
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>                
                </div>
            </Container>  
            </body>        
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
