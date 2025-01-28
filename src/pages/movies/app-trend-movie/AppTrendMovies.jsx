import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { MovieService } from "@cs/services/MovieService";
import { Component } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

class AppTrendMoviesWrapper extends Component
{
  constructor (props)
  {
    super(props);
    this.state = {
      trendMoviesList: [],
      currentPage: 1,
      isLodMore: true
    };
  }

  componentDidMount()
  {
    this.getTrendMovies();
  }

  getTrendMovies()
  {
    MovieService.getMovieTrends(this.state.currentPage)
      .then((response) =>
      {
        const isLoadMore = this.currentPage === response.total_pages - 1;
        this.setState((prevState) => (
          {
            ...prevState,
            isLoadMore: isLoadMore,
            trendMoviesList: prevState.trendMoviesList.concat(response.data.results)
          }
        ));
      });
  }


  handleLoadMore = () =>
  {
    this.setState((prevState) => ({
      ...prevState, currentPage: prevState.currentPage + 1
    }), () => this.getTrendMovies());
  };

  handlePosterClick(id)
  {
    this.props.navigate(`/movies/${ id }`);
  }

  prepareMediaList()
  {
    return this.state.trendMoviesList.map((movie) => (
      {
        id: movie.id,
        title: movie.title,
        posterImageUrl: ImagePath.POSTER_PATH + movie.poster_path,
      }));
  }

  render()
  {

    return (
      <>
        {this.state.trendMoviesList.length > 0 && <AppViewMore
          title="Trending Movies"
          items={this.prepareMediaList()}
          isLoadMore={this.state.isLodMore}
          handleLoadMore={this.handleLoadMore}
          handlePosterClick={this.handlePosterClick.bind(this)} />
        }
      </>

    );
  }
}

const HOC = (Component) =>
{

  const WrappedComponent = (props) =>
  {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
  return WrappedComponent;
};

const AppTrendMovies = HOC(AppTrendMoviesWrapper);

export default AppTrendMovies;

AppTrendMoviesWrapper.propTypes = {
  navigate: PropTypes.func
};
