import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const MovieDetailsReviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}><Link to={`movies/reviews/${review.reviewId}`} state={{ review: review }}>{review.title}</Link></li>
        ))} 
      </ul>
      <ListGroup>
        {reviews.toReversed().map((review) => (
          <ListGroup.Item key={review.reviewId}>
            <Link to={`/reviews/${review.reviewId}`}>{review.title} by {review.author}</Link>
            <br />
            <p>{review.movieTitle}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default MovieDetailsReviews;
