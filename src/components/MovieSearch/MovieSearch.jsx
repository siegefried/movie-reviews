import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MovieSearch = (props) => {
  const [searchInput, setsearchInput] = useState("");

  const handleChange = ({ target }) => {
    setsearchInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchMovieTitle(searchInput);
    setsearchInput("");
  }

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="input"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
};

export default MovieSearch;
