import { Outlet, useParams } from "react-router";
import { useEffect, useState } from "react";
import { AppMediaViewContent } from "@cs/components/app-media-view-content/app-media-view-content";
import { AppStarContent } from "@cs/components/app-star-content/AppStarContent";
import { ImagePath } from "@cs/constants/ImageConstants";
import { AppMediaCardList } from "@cs/components/app-media-card-list/AppMediaCardList";
import { AppCastCrew } from "@cs/components/app-cast-crew/AppCastCrew";
import { TvSeriesService } from "@cs/services/TvSeriesService";

export function AppTvSeriesSummary()
{

  const params = useParams();
  const [tvSeriesDetails, setTvSeriesDetails] = useState();
  const [tvSeriesCredits, setTvCredits] = useState();
  const [tvSeriesVideos, setTvVideos] = useState();
  const [tvSeriesRecommendations, setTvSeriesRecommendations] = useState();
  const [tvSeriesSimilar, setTvSimilarMovies] = useState();


  // const [airingTodayTvSeries, setAiringTodayTvSeries] = useState();
  // const [currentWeekTvSeries, setCurrentWeekTvSeries] = useState();
  // const [popularTvSeries, setPopularTvSeries] = useState();
  // const [topRatedTvSeries, setTopRatedTvSeries] = useState();



  useEffect(() =>
  {
    TvSeriesService.getTvSeriesDetails(params.id)
      .then((response) => setTvSeriesDetails(response.data));

    TvSeriesService.getAggregateCredits(params.id)
      .then((response) => setTvCredits(response.data));

    TvSeriesService.getTvSeriesVideos(params.id)
      .then((response) => setTvVideos(response.data));

    TvSeriesService.getSimilarTvSeries(params.id)
      .then((response) => { setTvSimilarMovies(response.data); });

    TvSeriesService.getRecommendedTvSeries(params.id)
      .then((response) => { setTvSeriesRecommendations(response.data); });

  }, [params.id]);


  const prepareMovieData = (movieList) =>
  {
    return movieList.filter((movie) => movie.poster_path && movie.backdrop_path)
      .map((movie) =>
      {
        return {
          id: movie.id,
          title: movie.name,
          posterImageUrl: ImagePath.BANNER_PATH + movie.poster_path,
          bannerImageUrl: ImagePath.BANNER_PATH + movie.backdrop_path,
        };
      });

  };


  return (
    <div style={{ backgroundColor: "var(--bg-color-3)", paddingBottom: "2rem" }}>
      {tvSeriesDetails && tvSeriesCredits &&
        <AppStarContent
          bannerImageUrl={ImagePath.BANNER_PATH + tvSeriesDetails.backdrop_path}
          title={tvSeriesDetails.name}
          description={tvSeriesDetails.overview}
          id={tvSeriesDetails.id}>

          <AppMediaViewContent
            posterImageUrl={ImagePath.BANNER_PATH + tvSeriesDetails.poster_path}
            title={tvSeriesDetails.name}
            rating={tvSeriesDetails.vote_average}
            description={tvSeriesDetails.overview}
            noOfSeasons={tvSeriesDetails.number_of_seasons}
            noOfEpisodes={tvSeriesDetails.number_of_episodes}
            director={tvSeriesDetails.created_by.slice(0, 4).map(crew => crew.name).join(", ") ?? "-"}
            cast={tvSeriesCredits.cast.filter(crew => crew.known_for_department === "Acting").slice(0, 4).map(crew => crew.name).join(", ")}
            genres={tvSeriesDetails.genres}
            releaseDate={tvSeriesDetails.first_air_date}
          />
        </AppStarContent>
      }

      {tvSeriesVideos?.results?.length > 0 &&
        <AppMediaCardList
          items={tvSeriesVideos?.results}
          title="Videos"
          mediaType="tv"
          isVideo={true}
          isViewMore={false}
        />
      }

      {tvSeriesRecommendations &&
        <AppMediaCardList
          items={prepareMovieData(tvSeriesRecommendations.results)}
          title="Recommendations"
          isViewMore={false}
          mediaType="tv"
        />
      }

      {tvSeriesSimilar?.results?.length > 0 &&
        <AppMediaCardList
          items={prepareMovieData(tvSeriesSimilar.results)}
          title="Similar Movies"
          mediaType="tv"
          isViewMore={false} />
      }

      {tvSeriesCredits && <AppCastCrew credits={tvSeriesCredits} />}

      <Outlet />
    </div>
  );
}
