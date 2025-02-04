import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppTrendingTvSeries()
{
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [trendingTvSeries, setTrendingTvSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  function prepareMediaList()
  {
    return trendingTvSeries.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  useEffect(() =>
  {
    TvSeriesService.getTvTrends(currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage === response.total_pages - 1;
        setIsLoadMore(!isLoadMore);
        setTrendingTvSeries((prevValue) => prevValue.concat(response.data.results));
      });
  }, [currentPage]);


  return <>
    {trendingTvSeries.length > 0 &&
      <AppViewMore
        title="Airing This Week"
        items={prepareMediaList()}
        isLoadMore={isLoadMore}
        handleLoadMore={() => setCurrentPage((prevValue) => prevValue + 1)}
        handlePosterClick={(id) => navigate(`/tv/${ id }`)
        }
      />
    }
  </>;
}
