function getListMoviesByPage() {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a07463cf1be035986486fd8f95a8f02b"
  );
}
export { getListMoviesByPage };
