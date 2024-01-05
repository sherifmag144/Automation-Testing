 describe('Automation Practise', () => {

  it.skip('HRM for Login Test Case', () => {

     cy.fixture('HRM').then((data) => {

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      data.forEach((userdata) => {
         cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userdata.username)
         cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userdata.password)
         cy.get("button[type='submit']").click()


        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(".oxd-userdropdown-tab").should("be.visible")
          cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
          cy.get(":nth-child(4) > .oxd-userdropdown-link").click()
        }
        else {
          Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
          });
          cy.get(".oxd-alert").should("have.text", "Invalid credentials")
        }
      })

    })



  });

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test
      return false;
    });
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123")
    cy.get("button[type='submit']").click()

  });

  it.skip('test user role from admin', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test
      return false;
    });
    cy.get(":nth-child(1) > .oxd-main-menu-item").click()
    cy.get("div[class='oxd-table-filter-area'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
    cy.contains('.oxd-select-wrapper .oxd-select-dropdown .oxd-select-option', 'ESS').click();
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

  });

  it.skip('search for emplyee', () => {
    cy.fixture('Employee').then((data) => {
      data.forEach((userdata) => {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type(userdata.EmployeeName)
        cy.get(':nth-child(2) > .oxd-input').type(userdata.EmployeeId)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', '(1) Record Found')
      })
    })
  });


})