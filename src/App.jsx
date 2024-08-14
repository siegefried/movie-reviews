import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SiteNavBar from "./components/SiteNavBar/SiteNavBar";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import { createReview, deleteReview } from "./services/reviewsService";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState("Josh");
  const [watchedList, setWatchedList] = useState([
    "tt0076759",
    "tt0080684",
    "tt0086190",
  ]);

  const addReview = (newReview) => {
    newReview.timeCreated = Date.now();
    newReview.author = user;
    newReview.upvotes = 0;
    createReview(newReview);
  };

  const removeReview = (deletedReview) => {
    deleteReview(deletedReview.id);
  };

  const handleAddWatched = (imdbID) => {
    setWatchedList([...watchedList, imdbID]);
  }

  return (
    <>
      <SiteNavBar />
      <Routes>
        <Route path="/movies" element={<WatchedMovies watchedList={watchedList} />}></Route>
        <Route
          path="/reviews/new"
          element={<ReviewForm addReview={addReview} />}
        ></Route>
        <Route
          path="/reviews/:reviewId"
          element={
            <ReviewDetails removeReview={removeReview} />
          }
        ></Route>
        <Route path="/moviesearch" element={<MovieSearch handleAddWatched={handleAddWatched} watchedList={watchedList} />} ></Route>
      </Routes>
    </>
  );
};

export default App;
