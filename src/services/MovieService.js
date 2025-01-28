import { ApiConstant } from "../constants/ApiConstants";
import Interceptor from "./interceptor";

export class MovieService {
  static getAllTrends() {
    return Interceptor.getAxiosInstance().get(`${ApiConstant.ALL_TRENDS}`);
  }

  static getMovieTrends(page=1) {
    return Interceptor.getAxiosInstance().get(`${ApiConstant.MOVIE_TRENDS}/week`,{params:{page}});
  }

  static getPersonTrends() {
    return Interceptor.getAxiosInstance().get(`${ApiConstant.PERSON_TRENDS}/week`);
  }

  static getMovieDetails(movieId) {
    const url = ApiConstant.MOVIE_DETAILS.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getSimilarMovies(movieId,page=1) {
    const url = ApiConstant.SIMILAR_MOVIES.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url,{params:{page}});
  }

  static getRecommendedMovies(movieId,page=1) {
    const url = ApiConstant.RECOMMENDED_MOVIES.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url,{params:{page}});
  }

  static getMovieVideos(movieId) {
    const url = ApiConstant.MOVIE_VIDEOS.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getMovieReviews(movieId) {
    const url = ApiConstant.MOVIE_REVIEW.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getPopularMovies(page=1) {
    return Interceptor.getAxiosInstance().get(ApiConstant.POPULAR_MOVIES,{params:{page:page}});
  }

  static getTopRatedMovies(page=1) {
    return Interceptor.getAxiosInstance().get(ApiConstant.TOP_RATED_MOVIES,{params:{page:page}});
  }

  static getUpcomingMovies(page=1) {
    return Interceptor.getAxiosInstance().get(ApiConstant.UPCOMING_MOVIES,{params:{page:page}});
  }

  static getNowPlayingMovies(page=1) {
    return Interceptor.getAxiosInstance().get(ApiConstant.NOW_PLAYING,{params:{page:page}});
  }

  static getGenres(){
    return Interceptor.getAxiosInstance().get(ApiConstant.MOVIE_GENRES);
  }

  static getMovieCredits(movieId) {
    const url = ApiConstant.MOVIE_CREDITS.replace('{id}', movieId);
    return Interceptor.getAxiosInstance().get(url);
  }
}
