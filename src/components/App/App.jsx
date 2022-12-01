import Header from '../Header/Header';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import { api } from '../../utils/MainApi';
import { CurrentUserContext } from "../../context/CurrentUserContext"
import { SavedMoviesContext } from "../../context/SavedMoviesContext"
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [savedMoviesLoaded, setSavedMoviesLoaded] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

  const validation = () => {
    return api
      .validation()
      .then((res) => {
        setLoggedIn(true);
        setUser(res.data);
      })
      .catch();
  };

  const handleLogin = ({ password, email }) => {
    return api
      .login({ password, email })
      .then((res) => {
        return validation();
      });
  };
  const handleLogout = () => {
    api.logout().then((res) => {
      setLoggedIn(false);
      navigate("/");
      window.localStorage.removeItem('search');
      window.localStorage.removeItem('isShort');
    })

  }
  const handleRegister = ({ name, password, email }) => {
    return api
      .register({ name, password, email })
      .then((res) => {
        handleLogin({password, email}).then(() => {
        navigate("/movies");
        });
      })
      .catch((e) => {
      });
  };

  const handleEdit = ({name, email}) => {
    if (name === user.name && email === user.email) {
      return;
    }
    return api
    .setUserInfo({name, email})
    .then((res) => {
      setUser(res.data);
    })
  }
  const handleSaveMovie = (country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) => {
    return api.addSavedMovie(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN)
    .then((res) => {
      api.getSavedMovies().then((res) => {
        setSavedMovies(res.data);
      });
    })
  }
  const handleRemoveMovie = (movieId) => {
    return api.removeSavedMovie(movieId)
    .then((res) => {
      api.getSavedMovies().then((res) => {
        setSavedMovies(res.data);
      })
    })
  }

  useEffect(() => {
    if (loggedIn === true) {
      api.getSavedMovies().then((res) => {
        setSavedMovies(res.data);
        setSavedMoviesLoaded(true);
      })
    }
  },[loggedIn])
  useEffect(() => {
    validation();
  }, [])
  return (
    <CurrentUserContext.Provider value={user}>
      <SavedMoviesContext.Provider value={savedMovies}>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Header loggedIn={loggedIn} className={'header_color_main'}></Header>}
          ></Route>
          <Route
            exact
            path='/movies'
            element={<Header loggedIn={loggedIn}></Header>}
          ></Route>
          <Route
            exact
            path='/saved-movies'
            element={<Header loggedIn={loggedIn}></Header>}
          ></Route>
          <Route
            exact
            path='/profile'
            element={<Header loggedIn={loggedIn}></Header>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path='/'
            element={<Main></Main>}
          ></Route>
          <Route
            exact
            path='/movies'
            element={<ProtectedRoute loggedIn={loggedIn}><Movies movies={movies} setMovies={setMovies} savedMoviesLoaded={savedMoviesLoaded} setSavedMoviesLoaded={setSavedMoviesLoaded} handleRemoveMovie={handleRemoveMovie} handleSaveMovie={handleSaveMovie}></Movies></ProtectedRoute>}
          ></Route>
          <Route
            exact
            path='/saved-movies'
            element={<ProtectedRoute loggedIn={loggedIn}><SavedMovies handleRemoveMovie={handleRemoveMovie}></SavedMovies></ProtectedRoute>}
          >
          </Route>
          <Route
            exact
            path='/profile'
            element={<ProtectedRoute loggedIn={loggedIn}><Profile handleLogout={handleLogout} onEdit={handleEdit}></Profile></ProtectedRoute>}
          >
          </Route>
          <Route
            exact
            path='/signin'
            element={<Login
              onLogin={handleLogin}
            ></Login>}
          >
          </Route>
          <Route
            exact
            path='/signup'
            element={<Register
            onRegister={handleRegister}
            ></Register>}
          >
          </Route>
          <Route
            exact
            path='/*'
            element={<NotFound></NotFound>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path='/'
            element={<Footer></Footer>}
          >
          </Route>
          <Route
            exact
            path='/movies'
            element={<Footer></Footer>}
          >
          </Route>
          <Route
            exact
            path='/saved-movies'
            element={<Footer></Footer>}
          >
          </Route>
        </Routes>

      </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
