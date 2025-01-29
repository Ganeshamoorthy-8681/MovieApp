import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppPopularTvSeries()
{
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [popularTvSeries, setPopularTvSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  function prepareMediaList()
  {
    return popularTvSeries.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  useEffect(() =>
  {
    TvSeriesService.getPopularTvSeries(currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage === response.total_pages - 1;
        setIsLoadMore(!isLoadMore);
        setPopularTvSeries((prevValue) => prevValue.concat(response.data.results));
      });
  }, [currentPage]);


  return <>
    {popularTvSeries.length > 0 &&
      <AppViewMore
        title="Popular Tv Series"
        items={prepareMediaList()}
        isLoadMore={isLoadMore}
        handleLoadMore={() => setCurrentPage((prevValue) => prevValue + 1)}
        handlePosterClick={(id) => navigate(`/tv/${ id }`)
        }
      />
    }
  </>;
}
