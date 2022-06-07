describe('Add course form', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000/form')
  })

  it('Should have a title', () => {
    cy.get('.add-course-title').should('contain', "Add a Course")
  })

  it("User Should be able to type in every input field", () => {
    cy.get('input[name="title"]').type("hello");
    cy.get('input[name="author"]').type("hello")
    cy.get('input[name="lesson_title"]').type("hello")
    cy.get('textarea[name="overview"]').type("hello")
    cy.get('textarea[name="lesson_content"]').type("hello")
  })

  it("should be able to post a lesson", () => {
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/courses', [{"id": 4}])
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/lessons', "6")
    cy.get('input[name="title"]').type("hello");
    cy.get('input[name="author"]').type("hello")
    cy.get('input[name="lesson_title"]').type("hello")
    cy.get('textarea[name="overview"]').type("hello")
    cy.get('textarea[name="lesson_content"]').type("hello")
    cy.get(".submit-btn").eq(0).click()
    cy.get('input[name="title"]').should('have.text', "");
    cy.get('input[name="author"]').should('have.text', "")
    cy.get('input[name="lesson_title"]').should('have.text', "")
    cy.get('textarea[name="overview"]').should('have.text', "")
    cy.get('textarea[name="lesson_content"]').should('have.text', "")
  })

  it("should get an Error Message if a field is missing when adding a course", () => {
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/courses', [{"id": 4}])
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/lessons', "6")
    cy.get('input[name="title"]').type("hello");
    cy.get('input[name="author"]').type("hello")
    cy.get('input[name="lesson_title"]').type("hello")
    cy.get('textarea[name="overview"]').type("hello")
    cy.get(".submit-btn").eq(0).click()
    cy.get('h3').contains("Please fill out all course and lesson sections before submitting!")
  })
})

describe('Add lesson form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  })

  it('Should have a title', () => {
    cy.get('.add-lesson-title').should('have.length', 1)
  })

  it("should let a user provide input in every input field", () => {
    cy.get('select').select(1);
    cy.get('input[name="lesson_title_two"]').type("hello")
    cy.get('textarea[name="lesson_content_two"]').type("hello")
  })

  it("should let you add a lesson to a course", () => {
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/lessons', [{"id": 5}])
    cy.get('select').select(1);
    cy.get('input[name="lesson_title_two"]').type("hello")
    cy.get('textarea[name="lesson_content_two"]').type("hello")
    cy.get(".submit-btn").eq(1).click()
    cy.get('select').should("contain", "Lorem Ipsum");
    cy.get('input[name="lesson_title_two"]').should('have.text', "")
    cy.get('textarea[name="lesson_content_two"]').should('have.text', "")
  })

  it("should give you an error message if you are missing a field to add a lesson", () => {
    cy.intercept("POST", 'https://frozen-eyrie-58000.herokuapp.com/api/v1/lessons', [{"id": 5}])
    cy.get('select').select(1);
    cy.get('input[name="lesson_title_two"]').type("hello")
    cy.get(".submit-btn").eq(1).click()
    cy.get('h3').contains("Please fill out all lesson sections before submitting!")
  })


})


describe("Test external page links", () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/form')
  })
  it('Should have not have a add course tab', () => {
    cy.get('.active')
      .contains('Add New Course')
  });

  it('Should have a home button', () => {
    cy.get('a').eq(1)
      .invoke('attr', 'href')
      .should('eq', '/branchOut/')
  });

  it('Should go home when the home button is clicked', () => {
    cy.get('a').eq(1).click()
    cy.url()
    .should('eq', 'http://localhost:3000/branchOut/')
  })
})
