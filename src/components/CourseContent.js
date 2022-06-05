import React from "react";
import "../CSS/CourseContent.css";

const CourseContent = ({ overview, selectedLesson, selectedLessonTitle }) => {
  return (
    <div className='lesson-content'>
      <p className="lesson-title">{selectedLessonTitle}</p>
      <p className="content-window">
      {selectedLesson}
      </p>
    </div>
  )

}

export default CourseContent
