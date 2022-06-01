import '../CSS/Form.css';
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className='form'>
        <input
          type='text'
          placeholder='Form'
        />
      </form>
    )
  }
}

export default Form;
