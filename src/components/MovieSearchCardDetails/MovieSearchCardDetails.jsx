import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovieId } from "../../services/moviesService";

const MovieSearchCardDetails = (props) => {
  const [movie, setMovie] = useState({});
  const { show, handleClose, imdbID, handleAddWatched, watchedList } = props;
  const navigate = useNavigate();

  const isMovieWatched = () => {
    return watchedList?.some((id) => id === imdbID);
  };

  const handleClick = () => {
    handleAddWatched(imdbID);
    navigate("/movies");
  };

  const loadMovie = async () => {
    const data = await searchMovieId(imdbID);
    setMovie(data);
  };

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={movie?.Poster} alt="movie poster" />
          <br />
          <br />
          <ul>
            <li>Date Released: {movie?.Released}</li>
            <li>Writer: {movie?.Writer}</li>
            <li>Actors: {movie?.Actors}</li>
            <li>Box Office: {movie?.BoxOffice}</li>
          </ul>
          <p>{movie?.Plot}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          {isMovieWatched() ? (
            <Button variant="warning">Watched</Button>
          ) : (
            <Button variant="success" onClick={handleClick}>
              Add to Watched
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieSearchCardDetails;
