import '../CSS/Form.css';
import React, { Component } from 'react';
import {apiCalls} from '../apiCalls/apiCalls'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      overview: '',
      lesson_title: '',
      lesson_content: ''
    }
  }

onClickHandler = (event) => {
  event.preventDefault();
  apiCalls.postCourse(this.state)
  this.clearInputs()
}

onChangeHandler = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

clearInputs = () => {
  this.setState({ title: '', author: '', overview:'', lesson_title:'', lesson_content:'' });
}

  render() {
    return (
      <form className='form'>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={(event) => this.onChangeHandler(event)}
        />
        <input
          type='text'
          placeholder='Author'
          name='author'
          value={this.state.author}
          onChange={(event) => this.onChangeHandler(event)}
        />
        <input
          type='text'
          placeholder='Overview'
          name='overview'
          value={this.state.overview}
          onChange={(event) => this.onChangeHandler(event)}
        />
        <input
          type='text'
          placeholder='Lesson Title'
          name='lesson_title'
          value={this.state.lesson_title}
          onChange={(event) => this.onChangeHandler(event)}
        />
        <input
          type='text'
          placeholder='Lesson Content'
          name='lesson_content'
          value={this.state.lesson_content}
          onChange={(event) => this.onChangeHandler(event)}
        />
        <button onClick={(event) => this.onClickHandler(event)}> Button Text
        </button>
      </form>
    )
  }
}

export default Form;
