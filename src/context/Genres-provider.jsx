import { GenresContext } from "@cs/context/Geners-context";
import { MovieService } from "@cs/services/MovieService";
import { TvSeriesService } from "@cs/services/TvSeriesService";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const GenresContextProvider = (props) =>
{
  const [data, setData] = useState({ data: null, isLoading: true });

  useEffect(() =>
  {
    getGenres();
  }, []);



  async function getGenres()
  {

    Promise.all([MovieService.getGenres(), TvSeriesService.getGenres()])
      .then((response) =>
      {
        const data = { movieGenres: response[0].data?.genres, tvGenres: response[1].data?.genres };
        console.log(data);
        const obj = {
          data: data,
          isLoading: false
        };
        setData(obj);
      })
      .catch((err) =>
      {
        console.log(err);
        setData({ ...data, isLoading: false });
      });

  }

  return (
    <GenresContext.Provider value={data}>
      {props.children}
    </GenresContext.Provider>
  );
};

GenresContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
