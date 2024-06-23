describe('Alerts', () => {

    beforeEach(()=> {
        cy.visit('https://practice.expandtesting.com/')
        cy.xpath("//a[normalize-space()='JavaScript Dialogs']").click()

    })

    it('JS Alert', ()=>  {
        cy.get('#js-alert').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a Js Alert');
         })
         cy.on('window:confirm', () =>true);
         cy.get('#dialog-response').should('have.text', 'OK')    
    })

    it('JS Confirm Alert with OK', ()=>  {
        cy.get('#js-confirm').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a Js Confirm');
         })
         cy.on('window:confirm', () => true)
         cy.get('#dialog-response').should('have.text', 'Ok')    

    })

    it('JS Confirm Alert with Cancel', ()=>  {
        cy.get('#js-confirm').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a Js Confirm');        
         })
         cy.on('window:confirm', () => false);
         cy.get('#dialog-response').should('have.text', 'Cancel')    
    })

    it('JS Prompt', ()=>  {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get('#js-prompt').click()
        cy.get('#dialog-response').should('have.text', 'welcome')    



    })



})