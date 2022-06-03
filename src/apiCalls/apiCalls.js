const apiCalls = {

  getCourses(){
    return fetch('https://frozen-eyrie-58000.herokuapp.com/api/v1/courses')
    .then(res => res.json())
  }


}

export {apiCalls}
