describe('Add course form', () => {
  beforeEach(() => {
    //cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", { fixture: "courses" })
    cy.visit('http://localhost:3000/form')
  })

  it('Should have a title', () => {
    cy.get('.add-course-title').should('have.length', 1)
  })

  it("User Should let a user type in every input field", () => {
    cy.get('input[name="title"]').type("hello");
    cy.get('input[name="author"]').type("hello")
    cy.get('input[name="lesson_title"]').type("hello")
    cy.get('textarea[name="overview"]').type("hello")
    cy.get('textarea[name="lesson_content"]').type("hello")
  })

  it("")

})

describe('Add course form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  })

  it('Should have a title', () => {
    cy.get('.add-lesson-title').should('have.length', 1)
  })

  it("should let a user type in every input field", () => {
    cy.get('select').select(0);
    cy.get('input[name="lesson_title_two"]').type("hello")
    cy.get('textarea[name="lesson_content_two"]').type("hello")
  })

})
