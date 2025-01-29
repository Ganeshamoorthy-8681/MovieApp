import { ApiConstant } from "../constants/ApiConstants";
import Interceptor from "./interceptor";

export class TvSeriesService{
  
  
  static getTvTrends() {
    return Interceptor.getAxiosInstance().get(`${ApiConstant.TV_TRENDS}/week`);
  }


  static getTvSeriesDetails(tvId) {
    const url = ApiConstant.TV_SERIES_DETAILS.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getSimilarTvSeries(tvId) {
    const url = ApiConstant.SIMILAR_TV_SERIES.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getRecommendedTvSeries(tvId) {
    const url = ApiConstant.RECOMMENDED_TV_SERIES.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getTvSeriesVideos(tvId) {
    const url = ApiConstant.TV_SERIES_VIDEOS.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getTvSeriesReviews(tvId) {
    const url = ApiConstant.TV_SERIES_REVIEW.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }

  static getPopularTvSeries() {
    return Interceptor.getAxiosInstance().get(ApiConstant.POPULAR_TV_SERIES);
  }

  static getTopRatedTvSeries() {
    return Interceptor.getAxiosInstance().get(ApiConstant.TOP_RATED_TV_SERIES);
  }

  static getAiringTodayTvSeries() {
    return Interceptor.getAxiosInstance().get(ApiConstant.AIRING_TODAY_TV_SERIES);
  }

  static getAiringWeekTvSeries() {
    return Interceptor.getAxiosInstance().get(ApiConstant.AIRING_WEEK_TV_SERIES);
  }

  static getGenres(){
    return Interceptor.getAxiosInstance().get(ApiConstant.TV_SERIES_GENRES);
  }

  static getAggregateCredits(tvId){
    const url = ApiConstant.TV_SERIES_CREDITS.replace('{id}', tvId);
    return Interceptor.getAxiosInstance().get(url);
  }
}
