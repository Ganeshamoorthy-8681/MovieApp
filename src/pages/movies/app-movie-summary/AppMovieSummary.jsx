import { Outlet, useParams } from "react-router";
import { useEffect, useState } from "react";
import { MovieService } from "@cs/services/MovieService";
import { AppMovieViewContent } from "@cs/components/app-movie-view-content/app-movie-view-content";
import { AppStarContent } from "@cs/components/app-star-content/AppStarContent";
import { ImagePath } from "@cs/constants/ImageConstants";
import { AppMediaCardList } from "@cs/components/app-media-card-list/AppMediaCardList";
import { AppCastCrew } from "@cs/components/app-cast-crew/AppCastCrew";

export function AppMovieSummary()
{

  const params = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieRecommendations, setMovieRecommendations] = useState();
  const [similarMovies, setSimilarMovies] = useState();


  useEffect(() =>
  {
    MovieService.getMovieDetails(params.id)
      .then((response) => setMovieDetails(response.data));

    MovieService.getMovieCredits(params.id)
      .then((response) => setMovieCredits(response.data));

    MovieService.getMovieVideos(params.id)
      .then((response) => setMovieVideos(response.data));

    MovieService.getSimilarMovies(params.id)
      .then((response) => { setSimilarMovies(response.data); });

    MovieService.getRecommendedMovies(params.id)
      .then((response) => { setMovieRecommendations(response.data); });

  }, [params.id]);

  const getTimeString = (number) =>
  {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${ hours }h ${ minutes }m`;
  };

  const prepareMovieData = (movieList) =>
  {
    return movieList.filter((movie) => movie.poster_path && movie.backdrop_path)
      .map((movie) =>
      {
        return {
          id: movie.id,
          title: movie.title,
          posterImageUrl: ImagePath.BANNER_PATH + movie.poster_path,
          bannerImageUrl: ImagePath.BANNER_PATH + movie.backdrop_path,
        };
      });

  };


  return (
    <div style={{ backgroundColor: "var(--bg-color-3)", paddingBottom: "2rem" }}>
      {movieDetails && movieCredits &&
        <AppStarContent
          bannerImageUrl={ImagePath.BANNER_PATH + movieDetails.backdrop_path}
          title={movieDetails.title}
          description={movieDetails.overview}
          id={movieDetails.id}>

          <AppMovieViewContent
            posterImageUrl={ImagePath.BANNER_PATH + movieDetails.poster_path}
            title={movieDetails.title}
            rating={movieDetails.vote_average}
            runtime={getTimeString(movieDetails.runtime)}
            description={movieDetails.overview}
            director={movieCredits.crew.filter(crew => crew.job === "Director").slice(0, 4).map(crew => crew.name).join(", ")}
            cast={movieCredits.cast.filter(crew => crew.known_for_department === "Acting").slice(0, 4).map(crew => crew.name).join(", ")}
            genres={movieDetails.genres}
            releaseDate={movieDetails.release_date}
          />
        </AppStarContent>
      }

      {movieVideos?.results?.length > 0 &&
        <AppMediaCardList
          items={movieVideos?.results}
          title="Videos"
          isVideo={true}
          isViewMore={false}
        />
      }

      {movieRecommendations &&
        <AppMediaCardList
          items={prepareMovieData(movieRecommendations.results)}
          title="Recommendations"
          isViewMore={false}
        />
      }

      {similarMovies?.results?.length > 0 &&
        <AppMediaCardList
          items={prepareMovieData(similarMovies.results)}
          title="Similar Movies"
          isViewMore={false} />
      }
      {movieCredits && <AppCastCrew credits={movieCredits} />}

      <Outlet />
    </div>
  );
}
