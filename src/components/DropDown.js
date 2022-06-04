import React, { Component} from "react";
import '../CSS/DropDown.css';

const DropDown = ({ courses }) => {
   const dropDownOptions = courses.map(
      course => <option value={course.id}>{course.title}</option>
    );

return (
  <div>
    <label>
    Choose a Course to Modify
      <select name='courseDropDown'>
        {dropDownOptions}
      </select>
    </label>
  </div>
)
}

export default DropDown;
