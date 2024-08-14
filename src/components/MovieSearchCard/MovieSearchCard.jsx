import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import MovieSearchCardDetails from "../MovieSearchCardDetails/MovieSearchCardDetails";

const MovieSearchCard = (props) => {
  const { movie } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Text>Released in {movie?.Year}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Card.Body>
      </Card>

      <MovieSearchCardDetails show={show} handleClose={handleClose} imdbID={movie.imdbID} handleAddWatched={props.handleAddWatched} watchedList={props.watchedList} />
    </>
  );
};

export default MovieSearchCard;
