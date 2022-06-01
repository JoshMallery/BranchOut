import React from 'react';
import '../CSS/Dashboard.css';
import CourseCard from './CourseCard'

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <h2>Dashboard</h2>
      <section className="courses-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </section>
  )
}
export default Dashboard;
