import './CSS/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import {apiCalls} from './apiCalls/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses:[],
    }
  }

  componentDidMount = () => {
    apiCalls.getCourses()
    .then(res => this.setState({courses: res}))
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
    </main>
  )
}

}



export default App;
