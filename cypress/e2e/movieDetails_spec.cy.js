describe('Rancid Tomatillos single movie display flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      ok: true,
      fixture: 'movies'
    });
    cy.visit('http://localhost:3000')
      .get('article').first().click()
  });

  it('Should update the URL to reflect the id of the movie whose details are currently displayed', () => {
      cy.url().should('eq', 'http://localhost:3000/694919');
  });

  it('Should be able to press back button and return to home page, where URL is restored to original address', () => {
    cy.get('button').click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('Should be able to press back and forward buttons to navigate having visited more than one page', () => {
    cy.get('button').click()
      .go('back')
      .go('forward')
  });

});
