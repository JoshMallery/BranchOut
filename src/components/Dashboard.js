import React from 'react';
import '../CSS/Dashboard.css';
import { NavLink } from 'react-router-dom';
import CourseCard from './CourseCard'

const Dashboard = ({courses}) => {
  const allCourses = courses.map(course => {

    return(
      <NavLink className="course-card" to={`/${course.title.split(" ").join("-")}`} key={course.courses_id}>
        <CourseCard {...course}/>
      </NavLink>
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
