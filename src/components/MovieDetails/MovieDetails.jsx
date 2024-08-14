import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsById } from "../../services/reviewsService";
import MovieDetailsReviews from "../MovieDetailsReviews/MovieDetailsReviews";

const MovieDetails = (props) => {
  const [reviews, setReviews] = useState([]);
  const { show, handleClose, movie } = props;

  const loadReviews = async () => {
    const reviewsArr = [];
    const data = await getReviewsById(movie.imdbID);
    reviewsArr.push(...data);
    setReviews(reviewsArr);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={movie?.Poster} />
          <br />
          <br />
          <ul>
            <li>Date Released: {movie?.Released}</li>
            <li>Writer: {movie?.Writer}</li>
            <li>Actors: {movie?.Actors}</li>
            <li>Box Office: {movie?.BoxOffice}</li>
          </ul>
          <p>{movie?.Plot}</p>
          {reviews.length === 0 ? (
            <></>
          ) : (
            <MovieDetailsReviews reviews={reviews} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            <Link to="/reviews/new" state={{ movie: movie }}>
              Add Review
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieDetails;
