const apiCalls = {

  getCourses(){
    return fetch('http://localhost:3001/api/v1/courses')
    .then(res => res.json())
  }


}

export {apiCalls}
