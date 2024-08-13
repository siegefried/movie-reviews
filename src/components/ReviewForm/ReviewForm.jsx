import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ReviewForm = (props) => {

  const initialState = {
    title: "",
    textContent: "",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const { movie }= location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.imdbID = movie.imdbID;
    formData.movieTitle = movie.Title;
    props.addReview(formData);
    setFormData(initialState);
    navigate("/reviews"); //TODO EDIT navigation
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const doesFormHasMissingData = !Object.values(formData).every(Boolean);

  return (
    <main>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reviewTitle">Review Title</label>
        <input
          id="reviewTitle"
          type="text"
          name="title"
          value={formData.value}
          onChange={handleChange}
        />
        <label htmlFor="reviewText">Review</label>
        <textarea
          id="reviewText"
          name="textContent"
          rows="10"
          value={formData.value}
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={doesFormHasMissingData}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default ReviewForm;
