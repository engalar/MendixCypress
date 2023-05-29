describe('Workflow list', () => {
  let XASSESSIONID;
  beforeEach(() => {
    if (XASSESSIONID) {
      cy.setCookie('XASSESSIONID', XASSESSIONID)
      debugger
      cy.visit('http://localhost:8080/index.html?profile=Responsive')
    } else {
      cy.visit('http://localhost:8080/login.html?profile=Responsive')

      cy.get('#usernameInput').type('MxAdmin')
      cy.get('#passwordInput').type('1')
      cy.get('#loginButton').click()

      cy.location('pathname').should('eq', '/index.html')

      cy.getCookie('XASSESSIONID').then((cookie) => {
        XASSESSIONID = cookie?.value;
      })
    }
  })

  it('Navigates to home page on valid login', () => {


    cy.get('.table-content > .tr').should('have.length', 1 + 2)

    cy.get('.table-content > .tr:nth-child(2) .td:nth-child(1) .td-text').should('have.text', 'Main workflow')

    cy.get('.table-content > .tr:nth-child(3) .td:nth-child(1) .td-text').should('have.text', 'Child workflow')

  })

  it('xxx', () => {
    cy.get('.table-content > .tr:nth-child(2) .td-text')
      .eq(1)
      .should('have.text', '1')

    cy.get('.table-content > .tr:last-child .td-text')
      .eq(1)
      .should('have.text', '0')
  })

})
