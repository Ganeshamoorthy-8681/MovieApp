import StarIcon from '@mui/icons-material/Star';
import styles from './AppMediaViewContent.module.css';
import PropTypes from "prop-types";
export const AppMediaViewContent = (props) =>
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
    releaseDate,
    noOfEpisodes,
    noOfSeasons
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
            <StarIcon sx={{ color: "#F59E0B" }} className="icon" /> {Math.round(rating * 100 / 100)} /10
          </span>
          {runtime && <span className={styles.duration}>{runtime}</span>}
        </div>
        <div className={styles.title}>
          {title}
          {genres &&
            <div className={styles.genres}>
              {genres.map(genre => <span key={genre.id} className={styles.badge}>{genre.name}</span>)}
            </div>
          }
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
          {
            noOfSeasons &&
            <div className={styles["key-value"]}>
              <span className={styles.key}>No of Seasons</span>
              <span className={styles.value}>{noOfSeasons}</span>
            </div>
          }

          {noOfEpisodes &&
            <div className={styles["key-value"]}>
              <span className={styles.key}>No of Episodes</span>
              <span className={styles.value}>{noOfEpisodes}</span>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

AppMediaViewContent.propTypes = {
  posterImageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  genres: PropTypes.array,
  cast: PropTypes.string,
  releaseDate: PropTypes.string,
  noOfEpisodes: PropTypes.bool,
  noOfSeasons: PropTypes.bool
};
