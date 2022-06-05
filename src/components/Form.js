import '../CSS/Form.css';
import React, { Component } from 'react';
import {apiCalls} from '../apiCalls/apiCalls';
import DropDown from './DropDown'

class Form extends Component {
  constructor({ updateCourses }) {
    super();
    this.state = {
      title: '',
      author: '',
      overview: '',
      lesson_title: '',
      lesson_content: '',
      courses: [],
      courses_id: null,
      lesson_title_two: '',
      lesson_content_two: '',
      course_errors: false,
      lesson_errors: false
    }
  }

componentDidMount = () => {
  apiCalls.getCourses()
  .then(res => this.setState({ courses:res }))
}

onClickHandler = (event) => {
  event.preventDefault();


  if( Object.keys(this.state).find((stateItem,index) => {
      if(index <= 4) {
          return  !this.state[stateItem]
    }
  })) {

    this.setState({course_errors:"Please fill out all course and lesson sections before submitting!", loading: false})
      return
  } else {

  this.setState({course_errors: false})

  apiCalls.postCourse(this.state)
  .then(() => apiCalls.getCourses())
  .then(res => this.setState({ courses:res }))
  .then(() => this.props.updateCourses())
  this.clearInputs()
  }
}

onChangeHandler = (event) => {
  console.log('name', event.target.name);
  console.log('value', event.target.value);
  this.setState({[event.target.name]: event.target.value})
}

onLessonClickHandler = (event) => {
  event.preventDefault();


  if( Object.keys(this.state).find((stateItem,index) => {
      if(index > 5 && index < 9 ) {
          return  !this.state[stateItem]
    }
  })) {

    this.setState({lesson_errors:"Please fill out all lesson sections before submitting!", loading: false})
      return
  } else {

  this.setState({lesson_errors: false})

  apiCalls.postLesson(this.state.lesson_title_two, this.state.lesson_content_two, this.state.courses_id)
  .then(() => apiCalls.getCourses())
  .then(res => this.setState({ courses:res }))
  .then(() => this.props.updateCourses())
  this.clearInputs()
  }

}

clearInputs = () => {
  this.setState({ title: '',
  author: '',
  overview:'',
  lesson_title:'',
  lesson_content:'',
  courses_id: null,
  lesson_title_two: '',
  lesson_content_two: '',
  errors:false
  });
}

  render() {
    return (
      <div className="form-page">
        <h2 className="add-course-title">Add a Course</h2>
        <hr className="add-course-hr"/>
        <section className="course-input-fields">
          <form className='add-course-form'>
            <aside className="basic-fields">
              <input
                type='text'
                placeholder='  Course Title'
                name='title'
                value={this.state.title}
                onChange={(event) => this.onChangeHandler(event)}
                required
              />
              <input
                type='text'
                placeholder='  Author (Thats you! =)'
                name='author'
                value={this.state.author}
                onChange={(event) => this.onChangeHandler(event)}
                required
              />
              <input
                type='text'
                placeholder='  Lesson Title'
                name='lesson_title'
                value={this.state.lesson_title}
                onChange={(event) => this.onChangeHandler(event)}
                required
              />
            </aside>
            <aside className="course-overview-summary">
              <textarea
                wrap="hard"
                className="overview-input"
                type='text'
                placeholder='  Course Overview'
                name='overview'
                value={this.state.overview}
                onChange={(event) => this.onChangeHandler(event)}
                required
              />
              <textarea
                wrap="hard"
                className="lesson-content-input"
                type='text'
                placeholder='  Lesson Content'
                name='lesson_content'
                value={this.state.lesson_content}
                onChange={(event) => this.onChangeHandler(event)}
                required
              />
            </aside>
          </form>
        </section>
        <button className="submit-btn" onClick={(event) => this.onClickHandler(event)}> Submit </button>
        {this.state.course_errors && <h3 className="course-error-msg">{this.state.course_errors}</h3>}
        <form className="modify-lesson-form">
          <h2 className="add-lesson-title">Add a Lesson to an Existing Course</h2>
          <hr className="add-lesson-title_hr"/>
          {this.state.lesson_errors && <h3>{this.state.lesson_errors}</h3>}
          <DropDown
            className="dropDown"
            courses={this.state.courses}
            onChangeHandler={this.onChangeHandler}
          />
          <input
            className="title-input"
            wrap="hard"
            type='text'
            placeholder='  Lesson Title'
            name='lesson_title_two'
            value={this.state.lesson_title_two}
            onChange={(event) => this.onChangeHandler(event)}
            required
          />
          <section className="modify-lesson-textareas">
            <textarea
              className="overview-input"
              wrap="hard"
              type='text'
              placeholder='Lesson Content'
              name='lesson_content_two'
              value={this.state.lesson_content_two}
              onChange={(event) => this.onChangeHandler(event)}
              required
            />
          </section>
          <button className="submit-btn" onClick={(event) => this.onLessonClickHandler(event)}> Submit New Lesson</button>
        </form>
      </div>
    )
  }
}

export default Form;
