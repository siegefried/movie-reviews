import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const MovieDetailsReviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ListGroup>
        {reviews.toReversed().map((review) => (
          <ListGroup.Item key={review.reviewId}>
            <Link to={`/reviews/${review.reviewId}`} state={{ selectedReview: review }}>{review.title}</Link>
            <br />
            <p>by {review.author}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default MovieDetailsReviews;
