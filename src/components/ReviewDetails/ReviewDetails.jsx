import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { deleteReview } from "../../services/reviewsService";

const ReviewDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedReview } = location.state;

  const handleDelete = (deletedReview) => {
    deleteReview(deletedReview.id);
    navigate("/movies");
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="reviewTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Come up with a good title!"
            name="title"
            value={selectedReview.title}
            disabled
          />
          <Form.Text className="text-muted">{selectedReview.movieTitle}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ReviewText">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Your review goes here."
            name="textContent"
            value={selectedReview.textContent}
            disabled
          />
        </Form.Group>
      </Form>


      <Button variant="primary" onClick={() => handleDelete(selectedReview)}>Delete Review</Button>
    </>
  );
};

export default ReviewDetails;
