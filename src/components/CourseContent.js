import React from "react";
import "../CSS/CourseContent.css";

const CourseContent = ({ overview, selectedLesson, selectedLessonTitle }) => {
console.log("SL", selectedLesson);
console.log("SLT", selectedLessonTitle);

  return (
    <div className='lesson-content'>
      {selectedLessonTitle}
      {selectedLesson}
    </div>
  )

}

export default CourseContent
