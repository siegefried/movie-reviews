import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <h1>Reviews List</h1>
      <ListGroup>
        {reviews.toReversed().map((review) => (
          <ListGroup.Item key={review.reviewId}>
            <Link to={`/reviews/${review.reviewId}`}>{review.title} by {review.author}</Link>
            <br />
            <p>{review.imdbID}</p> (//TODO: Link imdbID to title)
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ReviewsList;
