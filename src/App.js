import './CSS/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';


class App extends Component {
  constructor() {
    super();

  }

render() {
  return (
    <main className='App'>
      <NavBar />
      <Dashboard />
    <h1>I'm working here!</h1>
    </main>
  )
}

}



export default App;
