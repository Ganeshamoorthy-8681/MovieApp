import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { MovieService } from "@cs/services/MovieService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppNowPlayingMovies()
{


  const [isLoadMore, setIsLoadMore] = useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  function prepareMediaList()
  {
    return nowPlayingMovies.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  useEffect(() =>
  {
    MovieService.getNowPlayingMovies(currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage === response.total_pages - 1;
        setIsLoadMore(!isLoadMore);
        setNowPlayingMovies((prevValue) => prevValue.concat(response.data.results));
      });
  }, [currentPage]);



  return (
    <>
      {nowPlayingMovies.length > 0 &&
        <AppViewMore
          title="Upcoming Movies"
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
