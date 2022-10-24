describe('Rancid Tomatillos home page flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      ok: true,
      fixture: 'movies'
    });
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the home page and render the correct elements', () => {
    cy.get('h1')
      .contains('RANCID TOMATILLOS')
      .get('article')
      .should('have.length', 10);
  });

  it('Should display error handling message to user if the GET network request fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000')
      .contains(`Uh oh! That's a 404, please try again later!`);
  });

  it('Should be able to search for movies by title', () => {
    cy.get('input')
      .type('Money')
      .get('[alt="a poster of Money Plane"]');
  });

  it('Should display message to user if search yields no movies', () => {
    cy.get('input')
      .type('Jaws')
      .get('.error')
      .contains(`Sorry, that title doesn't exist! Try another title.`)
  });

  it('Should be able to click on an invidual movie and display movie details', () => {
    cy.get('article').first().click()
      .get('.movie-details').contains('A professional thief with $40 million in debt')
  });

  it('Should display a message to user if a bad url is entered, and user should be able to navigate home', () => {
    cy.visit('http://localhost:3000/potato')
      .get('.error')
      .contains(`Oops! Looks like that isn't a valid URL. Please try again.`)
      .get('button')
      .click()
      .url('eq', 'http://localhost:3000/')
  });

});
