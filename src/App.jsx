import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SiteNavBar from "./components/SiteNavBar/SiteNavBar";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const USER = "Josh"
  const [watchedList, setWatchedList] = useState([
    "tt0076759",
    "tt0080684",
    "tt0086190",
  ]);

  const handleAddWatched = (imdbID) => {
    setWatchedList([...watchedList, imdbID]);
  };

  return (
    <>
      <SiteNavBar />
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to Josh's site for movie reviews</h1>}
        ></Route>
        <Route
          path="/movies"
          element={<WatchedMovies watchedList={watchedList} />}
        ></Route>
        <Route
          path="/reviews/new"
          element={<ReviewForm user={USER} />}
        ></Route>
        <Route
          path="/reviews/:reviewId"
          element={<ReviewDetails />}
        ></Route>
        <Route
          path="/moviesearch"
          element={
            <MovieSearch
              handleAddWatched={handleAddWatched}
              watchedList={watchedList}
            />
          }
        ></Route>
        <Route path="*" element={<h1>Whoops, nothing there!</h1>} />
      </Routes>
    </>
  );
};

export default App;
