import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { MovieService } from "@cs/services/MovieService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppTopRatedMovies()
{

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  function prepareMediaList()
  {
    return topRatedMoviesList.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  useEffect(() =>
  {
    MovieService.getMovieTrends(currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage === response.total_pages - 1;
        setIsLoadMore(!isLoadMore);
        setTopRatedMoviesList((prevValue) => prevValue.concat(response.data.results));
      });
  }, [currentPage]);



  return (
    <>
      {topRatedMoviesList.length > 0 &&
        <AppViewMore
          title="Top Rated Movies"
          items={prepareMediaList()}
          isLoadMore={isLoadMore}
          handleLoadMore={() => setCurrentPage((prevValue) => prevValue + 1)}
          handlePosterClick={(id) => navigate(`/movies/${ id }`)
          }
        />
      }

    </>
  );
}
