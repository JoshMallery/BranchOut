import React from "react";
import "../CSS/LessonCard.css";
import { Link } from 'react-router-dom';

const LessonCard = ({ lesson_title, lesson_content, selectLesson }) => {
  return (
    <div className="lesson-card" onClick={(event) => selectLesson(lesson_title, lesson_content)}
>
      <p>{lesson_title}</p>
    </div>
  )
}

export default LessonCard;
