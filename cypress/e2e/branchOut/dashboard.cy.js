describe('Dashboard of BranchOut', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", { fixture: "courses" })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a branchOut logo', () => {
    cy.get('.logo')
      .should('exist');
  });

  it('Should have not have a home button', () => {
    cy.get('.active')
      .contains('Home')
  });

  it('Should have a button to add a Course', () => {
    cy.get('a').eq(1)
      .invoke('attr', 'href')
      .should('eq', '/form')
  });

  it('Should have Dashboard as the title', () => {
    cy.get('h2')
      .should('have.contain', "Dashboard")
  });

  it('Should have 3 courses', () => {
    cy.get('.course-card')
      .should('have.length', 3)
  });

  it('The second Course should have course Details', () => {
    cy.get('.course-card')
      .eq(1)
      .contains("Lesson title")

    cy.get('.course-card')
      .eq(1)
      .contains("Robbie")

    cy.get('.course-card')
      .eq(1)
      .contains("lesson from Robbie here")

    cy.get('.course-card')
      .eq(1)
      .contains("2 lessons")

  });

  it('A course should have a delete button', () => {
    cy.get('button')
      .eq(1)
  });

  it('Should be able to click Delete button for a lesson', () => {
    cy.intercept("DELETE", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", { fixture: "courses.json" })
    cy.get('button')
      .eq(1)
      .click()
  });

  it('Should be able to click a lesson', () => {
    cy.get('.course-card')
      .eq(1)
      .click()

      cy.url()
      .should('eq', 'http://localhost:3000/Lesson-title')
  });


  it('Should go to the form when the add new course button is clicked', () => {
    cy.get('a')
      .eq(1)
      .click()

    cy.url()
      .should('eq', 'http://localhost:3000/form')
  })

  it.skip('Should display an Error message if Failed to fetch', () => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", {
        statusCode: 500,
        body: {
        message: 'Server error. Please try again'
        }
      })

    cy.visit('http://localhost:3000/')
    cy.get('h3').should('have.value','Unable to Load Courses, Please try again!')

  });

  it('Should display a 404 message if an invalid url is entered', () => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses/anything", {
        statusCode: 500,
        body: {
        message: 'Server error. Please try again'
        }
      })

    cy.visit('http://localhost:3000/anything/wrongtext')
    cy.get('h2').contains('Looks like you took a wrong turn, click Home to go back!')

  });





})
