import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SiteNavBar from "./components/SiteNavBar/SiteNavBar";
import FavMovies from "./components/MovieDetailsReviews/MovieDetailsReviews";
import ReviewsList from "./components/ReviewsList/ReviewsList";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData, createReview, deleteReview } from "./services/reviewsService";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails";

const App = () => {
  const [user, setUser] = useState("Josh");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const data = await getData();
      data.sort((a, b) => a.reviewId - b.reviewId);
      setReviews(data);
    };
    loadReviews();
  }, []);

  const addReview = (newReview) => {
    newReview.reviewId = reviews.length + 1;
    newReview.author = user;
    newReview.upvotes = 0;
    createReview(newReview);
    setReviews([...reviews, newReview]);
  };

  const removeReview = (deletedReview) => {
    deleteReview(deletedReview.id)
    const newReviews = [...reviews].filter((review) => review.id !== deletedReview.id);
    setReviews(newReviews);
  }

  return (
    <>
      <SiteNavBar />
      <Routes>
        <Route path="/movies" element={<WatchedMovies />}></Route>
        <Route path="/movies/reviews/:reviewId" element={<ReviewDetails />}></Route>
        <Route
          path="/reviews"
          element={<ReviewsList reviews={reviews} />}
        ></Route>
        <Route
          path="/reviews/new"
          element={<ReviewForm addReview={addReview} />}
        ></Route>
        <Route path="/reviews/:reviewId" element={<ReviewDetails reviews={reviews} removeReview={removeReview} />}></Route>
      </Routes>
    </>
  );
};

export default App;
