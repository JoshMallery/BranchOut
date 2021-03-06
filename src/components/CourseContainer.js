import React, { Component} from "react";
import "../CSS/CourseContainer.css";
import CourseContent from "./CourseContent";
import Lessons from "./Lessons";
import {apiCalls} from '../apiCalls/apiCalls'

class CourseContainer extends Component {
  constructor({title, author, overview, lessons, course_id, match}) {
    super();
    this.state = {
      lessons: [],
      courseContent: "",
      title: "",
      selectedLessonTitle: "",
      selectedLesson: "",
      loading: true,
      errors:false,
    }
  }


componentDidMount = () => {
  Promise.all([apiCalls.getCourses()])
  .then(res => res)
  .then(data => {
    data[0].forEach(course => {
      if(this.props.match.params.course.split("-").join(" ") === course.title){
        this.setState({
          lessons: course.lessons,
          title: course.title,
          loading: false
        })
      }
    })
  })
  .catch(error => this.setState({errors:"Unable to Load Courses, Please try again!", loading: false}))
}

selectLesson = (lessonTitle, lessonContent) => {
  this.setState({selectedLessonTitle: lessonTitle, selectedLesson:lessonContent})
}

  renderCourseView = () => {
    return (
      <div className='course-container'>
        <p className="course-title">{this.props.title}</p>
        <div className='course-content'>
          {this.state.selectedLesson === "" ? <h2 className="lesson-content"><div className="content-window"><p className="course-overview">Course Overview: {this.props.overview} </p><p>Please Pick a Lesson to Start Your Learning Journey!</p></div></h2>:<CourseContent
            overview={this.props.overview}
            selectedLesson={this.state.selectedLesson}
            selectedLessonTitle={this.state.selectedLessonTitle}
            />}
          <Lessons
            lessons={this.props.lessons}
            selectLesson={this.selectLesson}
          />
        </div>
      </div>
    )
  }

  render() {

    return(
      <>

        {this.state.errors && <h3>{this.state.errors}</h3>}
        {this.state.loading ? <p>Loading</p> : this.renderCourseView()}
      </>
    )
  }
}
export default CourseContainer;
