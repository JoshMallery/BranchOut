import React from 'react';
import '../CSS/Dashboard.css';
import CourseCard from './CourseCard'

const Dashboard = ({courses}) => {
  const allCourses = courses.map(course => {
    return(
      <CourseCard {...course}/>
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
