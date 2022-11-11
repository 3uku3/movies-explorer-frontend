class Api {
  constructor(options) {
    this._options = options;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status}`);
    }
    return res.json();
  }
  register({name, password, email }) {
    return fetch(this._options.baseUrl + "/signup", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._getResponseData);
  }
  login({ password, email }) {
    return fetch(this._options.baseUrl + "/signin", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._getResponseData);
  }
  logout() {
    return fetch(this._options.baseUrl + "/signout", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  validation() {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }
  setUserInfo({ name, email }) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then(this._getResponseData);
  }
  getSavedMovies() {
    return fetch(this._options.baseUrl + "/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then(this._getResponseData);
  }
  addSavedMovie(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
    return fetch(this._options.baseUrl + "/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameEN: nameEN,
        nameRU: nameRU
      })
    }).then(this._getResponseData);
  }
  removeSavedMovie(movieId) {
    return fetch(this._options.baseUrl + "/movies/" + movieId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then(this._getResponseData);
  }
}


export const api = new Api({
  baseUrl: "http://localhost:3000"
})