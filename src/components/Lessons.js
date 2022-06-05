import React from "react";
import "../CSS/Lessons.css";
import LessonCard from './LessonCard'

const Lessons = ({ lessons, selectLesson }) => {
  const lessonComponents = lessons.map(lesson => {
    return (
      <LessonCard {...lesson}
        key={lesson.lesson_title}
        selectLesson={selectLesson}
      />
    )
  })
  return(

    <div className='lesson-container'>
    {lessonComponents}
    </div>
  )

}

export default Lessons;
