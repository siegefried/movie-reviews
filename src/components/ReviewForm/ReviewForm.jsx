import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { createReview } from "../../services/reviewsService";

const ReviewForm = (props) => {
  const initialState = {
    title: "",
    textContent: "",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const { movie } = location.state;

  const addReview = (newReview) => {
    newReview.timeCreated = Date.now();
    newReview.author = props.user;
    newReview.upvotes = 0;
    createReview(newReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.imdbID = movie.imdbID;
    formData.movieTitle = movie.Title;
    addReview(formData);
    setFormData(initialState);
    navigate("/movies");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const doesFormHasMissingData = !Object.values(formData).every(Boolean);

  return (
    <main>
      <h2>New Review</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="reviewTitle">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Come up with a good title!"
            name="title"
            value={formData.value}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">{movie.Title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ReviewText">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Your review goes here."
            name="textContent"
            value={formData.value}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={doesFormHasMissingData}
        >
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default ReviewForm;
