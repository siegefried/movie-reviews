import { useState } from "react";
import { Form, Button, Row, CardGroup } from "react-bootstrap";
import { searchMovieTitle } from "../../services/moviesService";
import MovieSearchCard from "../MovieSearchCard/MovieSearchCard";

const MovieSearch = (props) => {
  const [searchInput, setsearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = ({ target }) => {
    setsearchInput(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Search } = await searchMovieTitle(searchInput);
    setSearchResults(Search);
    setsearchInput("");
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="input"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
          value={searchInput}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      {searchResults.length === 0 ? (
        <></>
      ) : (
        <>
          <h2>Search Results</h2>
          <Row xs={1} md={3} className="g-4">
            {searchResults?.map((movie, idx) => (
                <CardGroup key={idx}>
                  <MovieSearchCard
                    key={movie.imdbID}
                    movie={movie}
                    handleAddWatched={props.handleAddWatched}
                    watchedList={props.watchedList}
                  />
                </CardGroup>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default MovieSearch;
