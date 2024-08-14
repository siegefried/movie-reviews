import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReviewDetails = (props) => {
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const selectedReview = props.reviews.find(
    (review) => review.reviewId === Number(reviewId)
  );

  const handleDelete = (deletedReview) => {
    props.removeReview(deletedReview);
    navigate("/reviews");
  }

  return (
    <>
      <h3>Title: {selectedReview.title}</h3>
      <h4>{selectedReview.movieTitle}</h4>
      <p>{selectedReview.textContent}</p>
      <Button variant="primary" onClick={() => handleDelete(selectedReview)}>Delete Review</Button>
    </>
  );
};

export default ReviewDetails;
