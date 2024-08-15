import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieCard = (props) => {
  const { movie } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card border="secondary" style={{ width: "18rem" }} className="d-flex">
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Text>Directed by {movie?.Director}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Card.Body>
      </Card>

      <MovieDetails show={show} handleClose={handleClose} movie={movie} />
    </>
  );
};

export default MovieCard;
