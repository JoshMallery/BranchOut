import './CSS/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Form from './components/Form';


class App extends Component {
  constructor() {
    super();

  }

render() {
  return (
    <main className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/" render={ () => <Dashboard /> }
        />
        <Route path="/form" render={ () => <Form /> }
        />
      </Switch>
    <h1>I'm working here!</h1>
    </main>
  )
}

}



export default App;
