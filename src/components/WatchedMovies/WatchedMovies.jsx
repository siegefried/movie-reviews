import { useState, useEffect } from "react";
import { Row, CardGroup, Spinner } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import { searchMovieId } from "../../services/moviesService";

// const tempArr = [
//   {
//     Title: "Star Wars: Episode IV - A New Hope",
//     Year: "1977",
//     Rated: "PG",
//     Released: "25 May 1977",
//     Runtime: "121 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "George Lucas",
//     Writer: "George Lucas",
//     Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
//     Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
//     Language: "English",
//     Country: "United States",
//     Awards: "Won 6 Oscars. 67 wins & 31 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//     Ratings: [
//       {
//         Source: "Internet Movie Database",
//         Value: "8.6/10",
//       },
//       {
//         Source: "Rotten Tomatoes",
//         Value: "93%",
//       },
//       {
//         Source: "Metacritic",
//         Value: "90/100",
//       },
//     ],
//     Metascore: "90",
//     imdbRating: "8.6",
//     imdbVotes: "1,460,832",
//     imdbID: "tt0076759",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "$460,998,507",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "Star Wars: Episode V - The Empire Strikes Back",
//     Year: "1980",
//     Rated: "PG",
//     Released: "18 Jun 1980",
//     Runtime: "124 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "Irvin Kershner",
//     Writer: "Leigh Brackett, Lawrence Kasdan, George Lucas",
//     Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
//     Plot: "After the Rebel Alliance are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
//     Language: "English",
//     Country: "United States",
//     Awards: "Won 1 Oscar. 27 wins & 20 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//     Ratings: [
//       {
//         Source: "Internet Movie Database",
//         Value: "8.7/10",
//       },
//       {
//         Source: "Rotten Tomatoes",
//         Value: "95%",
//       },
//       {
//         Source: "Metacritic",
//         Value: "82/100",
//       },
//     ],
//     Metascore: "82",
//     imdbRating: "8.7",
//     imdbVotes: "1,390,562",
//     imdbID: "tt0080684",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "$292,753,960",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
//   {
//     Title: "Star Wars: Episode VI - Return of the Jedi",
//     Year: "1983",
//     Rated: "PG",
//     Released: "25 May 1983",
//     Runtime: "131 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "Richard Marquand",
//     Writer: "Lawrence Kasdan, George Lucas",
//     Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
//     Plot: "After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
//     Language: "English, Kikuyu, Tagalog, Kalmyk-Oirat, Quechua, Polish",
//     Country: "United States",
//     Awards: "Nominated for 4 Oscars. 25 wins & 23 nominations total",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
//     Ratings: [
//       {
//         Source: "Internet Movie Database",
//         Value: "8.3/10",
//       },
//       {
//         Source: "Rotten Tomatoes",
//         Value: "82%",
//       },
//       {
//         Source: "Metacritic",
//         Value: "58/100",
//       },
//     ],
//     Metascore: "58",
//     imdbRating: "8.3",
//     imdbVotes: "1,130,803",
//     imdbID: "tt0086190",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "$316,566,101",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True",
//   },
// ];

const WatchedMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const [reviewChanges, setReviewChanges] = useState(0);
  const { watchedList } = props;


  // const watchedArr = [];
  // for (const watched of watchedList) {
  //   for (const movie of tempArr) {
  //     if (watched === movie.imdbID) {
  //       watchedArr.push(movie);
  //     }
  //   }
  // }

  const handleReviewChanges = () => {
    setReviewChanges(reviewChanges + 1);
  };

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
              handleReviewChanges={handleReviewChanges}
            />
          </CardGroup>
        ))}
      </Row>
    </>
  );
};

export default WatchedMovies;
