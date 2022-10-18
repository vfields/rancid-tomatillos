describe('Rancid Tomatillos home page flows', () => {

// As a user, when I load the application, I can see the title of the application
// As a user, when I load the application, I can see a collection of movies.

  it('Should be able to visit the home page and render the correct elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('Rancid Tomatillos');
    cy.get('section').get('a').get('article');
  });

//  As a user, if the GET network request fails, I can see an error handling message.

  it('Should display error handling message to user if the GET network request fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 });
    cy.visit('http://localhost:3000');
    cy.contains(`Uh oh! That's a 404, please try again later!`);
  });

//  As a user, when I click on a movie, I’m shown additional details about that movie.

  it('should be test', () => {
    cy.contains('Rancid')
  });

});
