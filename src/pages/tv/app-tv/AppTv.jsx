import { AppMediaCardList } from "@cs/components/app-media-card-list/AppMediaCardList";
import { AppStarContent } from "@cs/components/app-star-content/AppStarContent";
import { ImagePath } from "@cs/constants/ImageConstants";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppTvSeries()
{
  const [trendingTvSeries, setTrendingTvSeries] = useState();
  const [airingTodayTvSeries, setAiringTodayTvSeries] = useState();
  const [popularTvSeries, setPopularTvSeries] = useState();
  const [topRatedTvSeries, setTopRatedTvSeries] = useState();
  const [airingThisWeekTvSeries, setAiringThisWeekTvSeries] = useState();

  console.log("CHECING ON TV>>>>");
  const navigate = useNavigate();

  useEffect(() =>
  {
    TvSeriesService.getTvTrends()
      .then((response) => setTrendingTvSeries(response.data));
    TvSeriesService.getAiringTodayTvSeries()
      .then((response) => setAiringTodayTvSeries(response.data));
    TvSeriesService.getPopularTvSeries()
      .then((response) => setPopularTvSeries(response.data));
    TvSeriesService.getTopRatedTvSeries()
      .then((response) => setTopRatedTvSeries(response.data));
    TvSeriesService.getAiringWeekTvSeries()
      .then((response) => setAiringThisWeekTvSeries(response.data));

  }, []);

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
          trendingTvSeries &&
          <>
            <AppStarContent
              title={trendingTvSeries.results.at(0).title}
              bannerImageUrl={ImagePath.BANNER_PATH + trendingTvSeries.results.at(0).backdrop_path}
            >
              <div className="title">
                {trendingTvSeries.results.at(0).name}
              </div>

              <div className="description">
                {trendingTvSeries.results.at(0).overview}
              </div>
              <div className="btn">
                <button
                  type="button"
                  onClick={() => { navigate(`/tv/${ trendingTvSeries.results.at(0).id }`); }}>
                  More Info
                </button>
              </div>
            </AppStarContent>
            <AppMediaCardList
              title="Trending Tv Series"
              total={trendingTvSeries.total_results}
              items={prepareMediaList(trendingTvSeries.results.slice(1))}
              mediaType={"tv"}
              handleViewMore={() => { navigate("/tv/trend"); }}
            />
          </>
        }
        {
          airingTodayTvSeries &&
          <AppMediaCardList
            title="Airing Today"
            total={airingTodayTvSeries.total_results}
            mediaType={"tv"}
            items={prepareMediaList(airingTodayTvSeries.results.slice(1))}
            handleViewMore={() => { navigate("/tv/today"); }}
          />
        }

        {
          popularTvSeries &&
          <AppMediaCardList
            title="Popular Tv Series"
            total={popularTvSeries.total_results}
            mediaType={"tv"}
            items={prepareMediaList(popularTvSeries.results.slice(1))}
            handleViewMore={() => { navigate("/tv/popular"); }}
          />
        }

        {
          topRatedTvSeries &&
          <AppMediaCardList
            title="Top Rated Tv Series"
            total={topRatedTvSeries.total_results}
            mediaType={"tv"}
            items={prepareMediaList(topRatedTvSeries.results.slice(1))}
            handleViewMore={() => { navigate("/tv/top-rated"); }}
          />
        }
        {
          airingThisWeekTvSeries &&
          <AppMediaCardList
            title="Airing This Week"
            total={airingThisWeekTvSeries.total_results}
            mediaType={"tv"}
            items={prepareMediaList(airingThisWeekTvSeries.results.slice(1))}
            handleViewMore={() => { navigate("/tv/week"); }}
          />
        }
      </div>
    </>
  );
}
