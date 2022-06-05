const apiCalls = {

  getCourses(){
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/courses')
    .then(res => res.json())
    .catch(error => error)
  },

  getCourse() {
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/courses')
      .catch(error => console.log(error))
  },

  postCourse({ title, author, overview, lesson_title, lesson_content }){
    const courseToAdd = {title, author, overview}
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/courses', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(courseToAdd)
    })
    .then(res => res.json())
    .then(res => this.postLesson(lesson_title, lesson_content, res[0].id))
    .catch(error => error)
  },

  postLesson(lesson_title, lesson_content, courses_id){
    const lessonToAdd = {lesson_title, lesson_content, courses_id}
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/lessons', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(lessonToAdd)
    })
    .then(res => res.json())
    .catch(error => error)
  },

  deleteCourse(id){
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/courses', {
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id})
    })
    .then(res => res.json())
    .catch(error => console.log(error))
  }
}

export {apiCalls}
