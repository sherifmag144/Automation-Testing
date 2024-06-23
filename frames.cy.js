import 'cypress-iframe';
describe('Frame Practise', () => {
    it('testing', () => {
        cy.visit("https://outsystemsui.outsystems.com/live/web/BankingPreview?AllowInstall=true&Protocol=servicestudio")
        cy.frameLoaded("#contents_frame");
        cy.iframe().find("#ContinueWithSampleUser_Button").should('be.visible').click()
        cy.wait(3000)
        cy.iframe().find("#b1-Title").should('have.text', 'Hello, Andrea McKenzie')
        cy.iframe().find("[class='display-flex padding-y-base center padding-x-m border-size-s text-primary']").should('be.visible')
        cy.iframe().find("[class='table-header']").should('be.visible')
        cy.iframe().find("[class='sortable']").should('have.text','Posting date')
        cy.iframe().find("th:nth-child(2)").should('have.text','Transaction date')
        cy.iframe().find("th:nth-child(3)").should('have.text','Description')
        cy.iframe().find("[placeholder='Search by description']").type('car')
        cy.iframe().find("[data-header='Transaction date']").should('have.text','06 / 19 / 2024')
        cy.iframe().find("[data-header='Posting date']").should('have.text','06 / 19 / 2024')
        cy.iframe().find("[class='line-clamp']").should('have.text','Savings for a new car')
        cy.iframe().find("[data-testid='Pagination.RecordsNumber']").should('have.text','1')
        cy.wait(3000)
    })

})
