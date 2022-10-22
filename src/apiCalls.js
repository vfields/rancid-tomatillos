const checkError = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
};

const getMovieData = (id = "") => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => checkError(response));
};

const getMovieVideoData = (id = "") => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
  ).then((response) => checkError(response));
};

export { getMovieData, getMovieVideoData };
