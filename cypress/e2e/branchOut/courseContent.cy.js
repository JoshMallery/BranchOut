describe('Course Content of BranchOut', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", { fixture: "courses.json" })
    cy.visit('http://localhost:3000/')
    cy.get('.course-card').eq(0).click()
  });

  it('Should have a Title', () => {
    cy.get('.course-title', {timeout: 2000})
    .should('exist')
  });

  it('Should have a page title of the name of the course', () => {
    cy.get('.course-title')
    .should('have.text', 'Lorem Ipsum')
  });

  it('Should have a NavBar', () => {
    cy.get('.nav-bar')
    .should('exist')
  });

  it('Should have 3 lessons', () => {
    cy.get('.lesson-container').children()
    .should('have.length', 3)
  });

  it('Should be able to click on a lesson and display it', () => {
    cy.contains('lesson one').click()
    cy.get('.course-overview')
    .should('not.exist')
    cy.get('.lesson-title')
    .should('exist')
    .contains('lesson one')
    cy.get('.content-window')
    .should('exist')
  });

  it('Should be able to click on a different lesson and display it', () => {
    cy.contains('How to make a heroku account').click()
    cy.get('.course-overview')
    .should('not.exist')
    cy.get('.lesson-title')
    .should('exist')
    .contains('How to make a heroku account')
  });

  it('Should have a home button', () => {
    cy.get('a').eq(0)
      .invoke('attr', 'href')
      .should('eq', '/')
  });

  it('Should go home when the home button is clicked', () => {
    cy.get('a').eq(0).click()
    cy.url()
    .should('eq', 'http://localhost:3000/')
  });

  it('Should have a button to add a Course', () => {
    cy.get('a').eq(1)
      .invoke('attr', 'href')
      .should('eq', '/form')
  });

  it('Should go to the form when the add new course button is clicked', () => {
    cy.get('a').eq(1).click()
    cy.url()
    .should('eq', 'http://localhost:3000/form')
  })

  it('Should display a 404 message if an invalid course URL is entered', () => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses/anything", {
        statusCode: 500,
        body: {
        message: 'Server error. Please try again'
        }
      })

    cy.visit('http://localhost:3000/anything')
    cy.get('h3').contains('Unable to find that Course, Please go home and try again!')

  });

})
