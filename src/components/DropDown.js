import React from "react";
import '../CSS/DropDown.css';

const DropDown = ({ courses, onChangeHandler }) => {
   const dropDownOptions = courses.map(
      (course, index) => <option key={index} value={course.courses_id}>{course.title}</option>
    );

  dropDownOptions.unshift(<option key="CourseSelect" value={null}>-- Please Select a Course --</option>)

return (
  <div>
    <label>
    Choose a Course to Modify: &nbsp; &nbsp;
      <select name='courses_id' onChange={(event) => onChangeHandler(event)}>
        {dropDownOptions}
      </select>
    </label>
  </div>
)
}

export default DropDown;
