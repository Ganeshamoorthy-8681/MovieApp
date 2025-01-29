import { AppMediaCardList } from "@cs/components/app-media-card-list/AppMediaCardList";
import { AppStarContent } from "@cs/components/app-star-content/AppStarContent";
import { ImagePath } from "@cs/constants/ImageConstants";
import { MovieService } from "@cs/services/MovieService";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export function AppAllMoviesAndTv()
{

  const [moviesListData, setMoviesListData] = useState();
  const [tvSeriesListData, setTvSeriesListData] = useState();
  const navigate = useNavigate();

  useEffect(() =>
  {
    getMovieTrends();
    getTvSeriesTrends();
  }, []);


  const getMovieTrends = async () =>
  {
    const response = await MovieService.getMovieTrends();
    setMoviesListData(response.data);
  };


  const getTvSeriesTrends = async () =>
  {
    const response = await TvSeriesService.getTvTrends();
    setTvSeriesListData(response.data);
  };


  function prepareMediaList(data)
  {
    const items = data.map(media => ({
      id: media.id,
      title: media.title ?? media.name,
      description: media.overview,
      isAdult: media.adult,
      releaseDate: media.release_date,
      voting: media.vote_average,
      bannerImageUrl: ImagePath.BANNER_PATH + media.backdrop_path,
      posterImageUrl: ImagePath.POSTER_PATH + media.poster_path,
    }));
    return items;
  }

  return (
    <>
      <div style={{ backgroundColor: "var(--bg-color-3)", paddingBottom: "2rem" }}>
        {
          moviesListData &&
          <>
            <AppStarContent
              title={moviesListData.results.at(0).title}
              bannerImageUrl={ImagePath.BANNER_PATH + moviesListData.results.at(0).backdrop_path}
            >
              <div className="title">
                {moviesListData.results.at(0).title}
              </div>

              <div className="description">
                {moviesListData.results.at(0).overview}
              </div>
              <div className="btn">
                <button type="button" onClick={() => navigate(`/movies/${ moviesListData.results.at(0).id }`)}>More Info</button>
              </div>
            </AppStarContent>
            <AppMediaCardList
              title="Trending Movies"
              total={moviesListData.total_results}
              items={prepareMediaList(moviesListData.results.slice(1))}
              handleViewMore={() => navigate("/movies/trend")}
            />
          </>
        }

        {
          tvSeriesListData && <AppMediaCardList
            title="Trending Tv Series"
            total={tvSeriesListData.total_results}
            items={prepareMediaList(tvSeriesListData.results)}
            mediaType={"tv"}
            handleViewMore={() => navigate("/tv/trend")}
          />
        }

      </div>
    </>


  );
}
