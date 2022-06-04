import React from 'react';
import '../CSS/Dashboard.css';
import { NavLink } from 'react-router-dom';
import CourseCard from './CourseCard'

const Dashboard = ({courses, deleteCourse}) => {
  const allCourses = courses.map(course => {

    return(
      <div key={course.courses_id} className="course-card">
      <NavLink className="course-contents" to={`/${course.title.split(" ").join("-")}`}>
        <CourseCard {...course} />
      </NavLink>
      <p>Delete Course: <button onClick={() => deleteCourse(course.courses_id)}><img className="delete-icon" src={require("../images/trash-icon.png")}/></button></p>
      </div>
    )
  })
  return (
    <div className="test">
    <section className="dashboard-container">
      <h2>Dashboard</h2>
      <section className="courses-container">
        {allCourses}
      </section>
    </section>
    </div>
  )
}
export default Dashboard;
