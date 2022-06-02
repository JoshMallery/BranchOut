import React from 'react';
import '../CSS/CourseCard.css';

const CourseCard = ({author, title, overview, lessons}) => {
console.log(lessons)
  return (
    <div>
      <p>{title}</p>
      <p>By: <span>{author}</span></p>
      <p>{overview}</p>
      <p><span>{lessons.length} </span>{lessons.length > 1 ? "lessons" : "lesson"}</p>
    </div>
  )
}

export default CourseCard
