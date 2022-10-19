describe('Rancid Tomatillos single movie display flows', () => {

  beforeEach(() => {
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
      })
      .visit('http://localhost:3000')
      .get('article').first().click()
  });

// When a movie details page is rendered, the URL updates to reflect that movie’s unique ID.

  it('Should update the URL to reflect the id of the movie whose details are currently displayed', () => {
      cy.url().should('include', '694919');
  });

// As a user, when on the selected movie display page, I can press a button and return to the home page.
// When the home page is rendered, the URL no longer contains a movie ID.

  it('Should be able to press back button and return to home page, where URL is restored to original address', () => {
    cy.get('button').click()
      .url().should('eq', 'http://localhost:3000/');
  });

// As a user, having visited more than just the home page, I can click the browser forward & back arrows to navigate.

  it('Should be able to press back button and return to home page, where URL is restored to original address', () => {
    cy.get('button').click()
      .go('back')
      .go('forward')
  });

});

/*
As a user, if the GET network request fails, I can see an error handling message.
*/
