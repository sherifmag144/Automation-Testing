import "cypress-file-upload" ;

describe('Automation Practise', () => {


  before(() => {
    cy.visit('https://automationexercise.com/')
    cy.get("a[href='/login']").click()
    cy.get('[data-qa="login-email"]').type('sherio.egyptian@gmail.com')
    cy.get('[data-qa="login-password"]').type('102030')
    cy.get('[data-qa="login-button"]').click()
  });

  it('Add Products in Cart', () => {
    cy.get('body').should('be.visible')
    cy.wait(3000)
    cy.get('.shop-menu > .nav > :nth-child(2)').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.wait(3000)
    cy.get('.modal-footer > .btn').click()
    cy.wait(3000)
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.wait(3000)
    cy.get('.modal-footer > .btn').click()
    cy.wait(3000)
    cy.get('.shop-menu > .nav > :nth-child(3)').click()
    cy.wait(3000)
    cy.get('#product-2 > .cart_description').should('include.text', 'Men Tshirt').and('exist')
    cy.contains('#product-2 > .cart_price', 'Rs. 400').should('exist')
    cy.contains('#product-2 > .cart_quantity', '1').should('exist')
    cy.contains('#product-2 > .cart_total', 'Rs. 400').should('exist')
    cy.get('#product-5 > .cart_description').should('include.text', 'Winter Top').and('exist')
    cy.contains('#product-5 > .cart_price', 'Rs. 600').should('exist')
    cy.contains('#product-5 > .cart_quantity', '1').should('exist')
    cy.contains('#product-5 > .cart_total', 'Rs. 600').should('exist')
    cy.wait(2000)
    cy.get('.btn.btn-default.check_out').click()
    cy.wait(1000)
  });

  it('Verify Subscription in home page', () => {
    cy.get('body').should('be.visible')
    cy.get('#footer').scrollIntoView({ duration: 2000 }).should('be.visible');
    cy.get('.single-widget > h2').should('have.text', 'Subscription')
    cy.get('#susbscribe_email').type('sherio.egyptian@gmail.com')
    cy.get('#subscribe').click();
    cy.get('.alert-success.alert').should('contain', 'You have been successfully subscribed!');
  })

  it('Search Product', () => {
    cy.fixture('ex1').then((data) => {
      data.forEach((userdata) => {
        cy.get('body').should('be.visible')
        cy.get("a[href='/products']").click()
        cy.get(".features_items").should('be.visible')
        cy.get("#search_product").type(userdata.product)
        cy.get("#submit_search").click()
        if (userdata.product == "Frozen") {
          cy.get(".productinfo > p").should('contain', 'Frozen')
        }
        else {
          cy.get(".productinfo > p").should('contain', 'Blue')
        }
      })
    })

  });

  it('Contact Us form', () => {
    cy.get('body').should('be.visible')
    cy.get(':nth-child(9) > a').click()
    cy.get('div.contact-form > .title').should('be.visible').and('have.text','Get In Touch')
    cy.get('[data-qa="name"]').type('sherif')
    cy.get('[data-qa="email"]').type('sherifmag144@gmail.com')
    cy.get('[data-qa="subject"]').type('contact demo')
    cy.get('[data-qa="message"]').type('demo11')
    cy.get("input[name='upload_file']").attachFile("contactusdemo.xlsx") 
    cy.get('input[value="Submit"]').click()
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Press OK to proceed!")
    });
    cy.on('window:confirm', () => true)
    cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
  });

  });



