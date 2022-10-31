class MoviesApi {
  constructor(options) {
    this._options = options;
  }
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getMovies() {
    return fetch(this._options.baseUrl + '/beatfilm-movies')
      .then(this._getResponseData);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co"
})