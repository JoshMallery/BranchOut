import './CSS/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import CourseContainer from "./components/CourseContainer";
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

  updateCourses = () => {
    apiCalls.getCourses()
    .then(res => this.setState({courses: res}))
  }

  displayCourse = (match) => {
    const courseName = match.params.course.split("-").join(" ");
    return this.state.courses.find(course => course.title === courseName);
  }

  deleteCourseHandler = (id) => {
    apiCalls.deleteCourse(id)
    .then(() => this.updateCourses())
  }

render() {
  return (
    <main className='App'>
      <NavBar />

      <Switch>
        <Route exact path="/" render={ () => !this.state.courses.length ? <h2>Loading</h2> : <Dashboard deleteCourse={this.deleteCourseHandler} courses={this.state.courses}/> }
        />
        <Route path="/form" render={ () => <Form updateCourses={this.updateCourses}/> }
        />
        <Route path="/:course" render={({ match }) => {
          return(
            <div>
              <CourseContainer {...this.displayCourse(match)} match={match} />
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
