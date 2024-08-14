import { Link } from "react-router-dom";

const MovieDetailsReviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}><Link to={`movies/reviews/${review.reviewId}`} state={{ review: review }}>{review.title}</Link></li>
        ))} 
      </ul>
    </>
  );
};

export default MovieDetailsReviews;
