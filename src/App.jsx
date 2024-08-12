// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FavMovies from "./components/FavMovies/FavMovies";
import ReviewsList from "./components/ReviewsList/ReviewsList";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <>
      <h1>Movie Reviews</h1>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<WatchedMovies />}></Route>
        <Route path="/favMovies" element={<FavMovies />}></Route>
        <Route path="/reviews" element={<ReviewsList />}></Route>
        <Route path="/reviews/new" element={<ReviewForm />}></Route>
      </Routes>
    </>
  );
};

export default App;
