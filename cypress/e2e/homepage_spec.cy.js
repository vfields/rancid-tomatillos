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
    cy.contains('Rancid Tomatillos')
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

  it('Should be able to click on an invidual movie and display movie details', () => {
    cy.get('article').first().click()
      .get('.movie-details').contains('A professional thief with $40 million in debt')
  });

  it('Should be able to click on a different invidual movie and display movie details', () => {
    cy.get('article').last().click()
      .get('.movie-details').contains('Release Date: 08/20/2020')
  });

});
