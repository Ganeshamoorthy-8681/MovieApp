import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppAiringToday()
{
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [airingTodayTvSeries, setAiringTodayTvSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  function prepareMediaList()
  {
    return airingTodayTvSeries.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  useEffect(() =>
  {
    TvSeriesService.getAiringTodayTvSeries(currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage === response.total_pages - 1;
        setIsLoadMore(!isLoadMore);
        setAiringTodayTvSeries((prevValue) => prevValue.concat(response.data.results));
      });
  }, [currentPage]);


  return <>
    {airingTodayTvSeries.length > 0 &&
      <AppViewMore
        title="Airing Today Tv Series"
        items={prepareMediaList()}
        isLoadMore={isLoadMore}
        handleLoadMore={() => setCurrentPage((prevValue) => prevValue + 1)}
        handlePosterClick={(id) => navigate(`/tv/${ id }`)
        }
      />
    }
  </>;
}
