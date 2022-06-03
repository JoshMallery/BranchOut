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
        {title}
        <div className='course-content'>
          {this.state.selectedLesson === "" ? <h2>{overview} Please Pick a Lesson to Start Your Learning Journey!</h2>:<CourseContent
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
