import React from "react";
import '../CSS/DropDown.css';

const DropDown = ({ courses, onChangeHandler }) => {
  console.log("courses", courses);
   const dropDownOptions = courses.map(
      (course, index) => <option key={index} value={course.courses_id}>{course.title}</option>
    );



return (
  <div>
    <label>
    Choose a Course to Modify
      <select name='courses_id' onChange={(event) => onChangeHandler(event)}>
        {dropDownOptions}
      </select>
    </label>
  </div>
)
}

export default DropDown;
