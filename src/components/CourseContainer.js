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
      title: ""
    }
  }


componentDidMount = () => {
const {title, author, overview, lessons, course_id} = this.props
  this.setState({lessons:lessons, courseContent:overview, title:title})
}

  render() {
    const {title, author, overview, lessons, course_id} = this.props
    return(
      <div className='course-container'>
        {title}
        <div className='course-content'>
          <CourseContent overview = {overview}/>
          <Lessons />
        </div>        
      </div>
    )
  }


}

export default CourseContainer;
