import './CSS/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Course from "./components/Course";
import Lessons from "./components/Lessons";
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

  displayCourse = (match) => {
    const courseName = match.params.course.split("-").join(" ");
    const matchedCourse = this.state.courses.find(course => course.title === courseName);
    return matchedCourse
  }

render() {
  return (
    <main className='App'>
      <NavBar />

      <Switch>
        <Route exact path="/" render={ () => !this.state.courses.length ? <h2>Loading</h2> : <Dashboard courses={this.state.courses}/> }
        />
        <Route path="/form" render={ () => <Form /> }
        />
        <Route path="/:course" render={({ match }) => {
          return(
            <div>
              <Course {...this.displayCourse(match)} />
              <Lessons {...this.displayCourse(match)} />
            </div>
            )
          }
        }
        />
      </Switch>
    </main>
  )
}

}



export default App;
