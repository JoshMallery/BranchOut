describe('Dashboard of BranchOut', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://frozen-eyrie-58000.herokuapp.com/api/v1/courses", { fixture: "courses" })
    cy.visit('http://localhost:3000/')
  })

  it('Should have 3 courses', () => {
    cy.get('.course-card').should('have.length', 3)
  })

})
