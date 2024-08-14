import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReviewDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedReview } = location.state;

  const handleDelete = (deletedReview) => {
    props.removeReview(deletedReview);
    navigate("/movies");
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
