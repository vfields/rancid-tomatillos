describe('Rancid Tomatillos home page flows', () => {

// As a user, when I load the application, I can see the title of the application
// As a user, when I load the application, I can see a collection of movies.

  it('Should be able to visit the home page and render the correct elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      ok: true,
      fixture: 'movies.json'
    });
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos')
      .get('article')
      .should('have.length', 10);
  });

//  As a user, if the GET network request fails, I can see an error handling message.

  it('Should display error handling message to user if the GET network request fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000')
      .contains(`Uh oh! That's a 404, please try again later!`);
  });

//  As a user, when I click on a movie, I’m shown additional details about that movie.

  it('Should be able to click on an invidual movie and display movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        ok: true,
        body: {
          movies: [{
            'id': 694919,
            'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
            'title': 'Money Plane',
            'average_rating': 6.666666666666667,
            'release_date': '2020-09-29'
          }]
        }
      });
    cy.visit('http://localhost:3000')
      .get('article').first().click()
      .get('.movie-details').get('.overview').contains('A professional thief with $40 million in debt')
  });

});
