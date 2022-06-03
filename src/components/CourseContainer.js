import React, { Component} from "react";
import "../CSS/CourseContainer.css";
import CourseContent from "./CourseContent";
import Lessons from "./Lessons";

class CourseContainer extends Component {
  constructor({title, author, overview, lessons, course_id}) {
    super();
    this.state = {
      lessons: [],
      courseContent: "",
      title: "",
      selectedLessonTitle: "",
      selectedLesson: ""
    }
  }


componentDidMount = () => {
const {title, author, overview, lessons, course_id} = this.props
  this.setState({lessons:lessons, courseContent:overview, title:title})
}

selectLesson = (lessonTitle, lessonContent) => {
  this.setState({selectedLessonTitle: lessonTitle, selectedLesson:lessonContent})
}

  render() {
    const {title, author, overview, lessons, course_id} = this.props
    return(
      <div className='course-container'>
        <p className="course-title">{title}</p>
        <div className='course-content'>
          {this.state.selectedLesson === "" ? <h2 className="lesson-content"><div className="content-window"><p className="course-overview">Course Overview: {overview} </p><p>Please Pick a Lesson to Start Your Learning Journey!</p></div></h2>:<CourseContent
            overview={overview}
            selectedLesson={this.state.selectedLesson}
            selectedLessonTitle={this.state.selectedLessonTitle}
            />}
          <Lessons
            lessons={lessons}
            selectLesson={this.selectLesson}
          />
        </div>
      </div>
    )
  }
}

export default CourseContainer;
