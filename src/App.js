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
      errors: false
    }
  }

  componentDidMount = () => {
    apiCalls.getCourses()
    .then(res => this.setState({courses: res}))
    .catch(error => this.setState({errors:"Unable to Load Courses, Please try again!"}))
  }

  updateCourses = () => {
    apiCalls.getCourses()
    .then(res => this.setState({courses: res}))
    .catch(error => this.setState({errors:"Unable to Load Courses, Please try again!"}))
  }

  displayCourse = (match) => {
    const courseName = match.params.course.split("-").join(" ");
    return this.state.courses.find(course => course.title === courseName);
  }

  deleteCourseHandler = (id) => {
    apiCalls.deleteCourse(id)
    .then(() => this.updateCourses())
    .catch(error => this.setState({errors:"Unable to Delete Course, Please try again!"}))
  }

render() {
  return (
    <main className='App'>
      <NavBar />
      { this.state.errors ? <h3> {this.state.errors} </h3> :
      <Switch>
        <Route exact path="/" render={ () => !this.state.courses.length ? <h2>Loading</h2> : <Dashboard deleteCourse={this.deleteCourseHandler} courses={this.state.courses}/> }
        />
        <Route path="/form" render={ () => <Form updateCourses={this.updateCourses}/> }
        />
        <Route exact path="/:course" render={({ match }) => {
          return(
            <div>
              <CourseContainer {...this.displayCourse(match)} match={match} />
            </div>
            )
          }
        }

        />
        <Route render={() => <h2>Looks like you took a wrong turn, click Home to go back!</h2>} />
      </Switch>
    }
    </main>
  )
}

}



export default App;
