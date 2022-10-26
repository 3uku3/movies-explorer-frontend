import Header from '../Header/Header';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Header className={'header_color_main'}></Header>}
        ></Route>
        <Route
          exact
          path='/movies'
          element={<Header></Header>}
        ></Route>
        <Route
          exact
          path='/saved-movies'
          element={<Header></Header>}
        ></Route>
        <Route
          exact
          path='/profile'
          element={<Header></Header>}
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
          element={<Movies></Movies>}
        ></Route>
        <Route
          exact
          path='/saved-movies'
          element={<SavedMovies></SavedMovies>}
        >
        </Route>
        <Route
          exact
          path='/profile'
          element={<Profile></Profile>}
        >
        </Route>
        <Route
          exact
          path='/signin'
          element={<Login></Login>}
        >
        </Route>
        <Route
          exact
          path='/signup'
          element={<Register></Register>}
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
  );
}

export default App;
