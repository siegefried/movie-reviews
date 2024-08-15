import { useState, useEffect } from "react";
import { Row, CardGroup, Spinner } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import { searchMovieId } from "../../services/moviesService";

const WatchedMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const { watchedList } = props;

  const loadWatched = async () => {
    const temp = [];
    for (const watched of watchedList) {
      const data = await searchMovieId(watched);
      temp.push(data);
    }
    setMovies(temp);
  };

  useEffect(() => {
    loadWatched();
  }, []);

  if (movies.length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <h2>Movies</h2>
      <Row xs={1} md={3} className="g-4">
        {movies?.map((movie, idx) => (
          <CardGroup key={idx}>
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          </CardGroup>
        ))}
      </Row>
    </>
  );
};

export default WatchedMovies;
