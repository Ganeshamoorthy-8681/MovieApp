import StarIcon from '@mui/icons-material/Star';
import styles from './AppMovieViewContent.module.css';
import PropTypes from "prop-types";
export const AppMovieViewContent = (props) =>
{

  const {
    posterImageUrl,
    title,
    rating,
    runtime,
    description,
    director,
    genres,
    cast,
    releaseDate
  } = props;

  return (
    <div className={styles["movie-details"]}>
      <img
        src={posterImageUrl}
        alt={title}
      />
      <div className={styles["content"]}>
        <div className={styles["info"]}>
          <span className={styles.ratings}>
            <StarIcon color="warning" className="icon" /> {rating}/10
          </span>
          <span className={styles.duration}>{runtime}</span>
        </div>
        <div className={styles.title}>
          {title}
          <div className={styles.genres}>
            {genres.map(genre => <span key={genre.id} className={styles.badge}>{genre.name}</span>)}
            <span className={styles.badge}>Drama</span>
            <span className={styles.badge}>Adventure</span>
          </div>
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.credits}>
          <div className={styles["key-value"]}>
            <span className={styles.key}>Director</span>
            <span className={styles.value} style={{ whiteSpace: "nowrap" }} >{director}</span>
          </div>
          <div className={styles["key-value"]}>
            <span className={styles.key}>Cast</span>
            <span className={styles.value}>{cast}</span>
          </div>
          <div className={styles["key-value"]}>
            <span className={styles.key}>Release Date</span>
            <span className={styles.value}>{releaseDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AppMovieViewContent.propTypes = {
  posterImageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  genres: PropTypes.array,
  cast: PropTypes.string,
  releaseDate: PropTypes.string
};
