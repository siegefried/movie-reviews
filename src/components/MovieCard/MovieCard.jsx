import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const MovieCard = (props) => {
  const { movie } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Directed by {movie.Director}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={movie.Poster} />
          <ul>
            <li>Date Released: {movie.Released}</li>
            <li>Writer: {movie.Writer}</li>
            <li>Actors: {movie.Actors}</li>
            <li>Box Office: {movie.BoxOffice}</li>
          </ul>
          <p>{movie.Plot}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCard;
