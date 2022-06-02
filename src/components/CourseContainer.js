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
  this.setState({lessons:this.props.lessons, courseContent: this.props.overview, title: this.props.title})
}

  render() {
    return(
      <div>
        I'm the Course Container Friends!
        <CourseContent />
        <Lessons />
      </div>
    )
  }


}

export default CourseContainer;
