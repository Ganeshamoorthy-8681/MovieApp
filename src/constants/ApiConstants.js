export class ApiConstant {
  static BASE_PATH = "https://api.themoviedb.org/3/";
  
  // For Trending Api's time Period is hard coded, we can also mention the day also. 
  static ALL_TRENDS = ApiConstant.BASE_PATH + "trending/all/week";
  static MOVIE_TRENDS = ApiConstant.BASE_PATH + "trending/movie";
  static TV_TRENDS = ApiConstant.BASE_PATH + "trending/tv";
  static PERSON_TRENDS = ApiConstant.BASE_PATH + "trending/person";

  //For Movies Api...
  static MOVIE_DETAILS = ApiConstant.BASE_PATH + "movie/{id}";
  static SIMILAR_MOVIES = ApiConstant.MOVIE_DETAILS + "/similar";
  static RECOMMENDED_MOVIES =  ApiConstant.MOVIE_DETAILS + "/recommendations";
  static MOVIE_VIDEOS = ApiConstant.MOVIE_DETAILS + "/videos";
  static MOVIE_REVIEW =  ApiConstant.MOVIE_DETAILS + "reviews"
  static MOVIE_LIST = ApiConstant.BASE_PATH +"discover/movie";
  static POPULAR_MOVIES = ApiConstant.BASE_PATH + "movie/popular";
  static TOP_RATED_MOVIES = ApiConstant.BASE_PATH + "movie/top_rated";
  static UPCOMING_MOVIES = ApiConstant.BASE_PATH + "movie/upcoming";
  static LATEST_MOVIES = ApiConstant.BASE_PATH + "movie/latest";
  static NOW_PLAYING = ApiConstant.BASE_PATH + "movie/now_playing";
  static MOVIE_CREDITS =ApiConstant.MOVIE_DETAILS + "/credits";

  static MOVIE_GENRES = ApiConstant.BASE_PATH + "genre/movie/list";


  //For Tv Series Api...
  static TV_SERIES_DETAILS = ApiConstant.BASE_PATH + "tv/{id}";
  static SIMILAR_TV_SERIES = ApiConstant.TV_SHOW_DETAILS + "/similar";
  static RECOMMENDED_TV_SERIES =  ApiConstant.TV_SHOW_DETAILS + "/recommendations";
  static TV_SERIES_VIDEOS = ApiConstant.TV_SHOW_DETAILS + "/videos";
  static TV_SERIES_REVIEW =  ApiConstant.MOVIE_DETAILS + "reviews"
  static TV_SERIES_LIST = ApiConstant.BASE_PATH +"discover/tv";  
  static POPULAR_TV_SERIES = ApiConstant.BASE_PATH + "tv/popular";
  static TOP_RATED_TV_SERIES = ApiConstant.BASE_PATH + "tv/top_rated";
  static AIRING_WEEK_TV_SERIES = ApiConstant.BASE_PATH + "tv/on_the_air";
  static AIRING_TODAY_TV_SERIES = ApiConstant.BASE_PATH + "tv/airing_today";
  static LATEST_TV_SERIES = ApiConstant.BASE_PATH + "tv/latest";
  static TV_SERIES_CREDITS =ApiConstant.TV_SERIES_DETAILS + "/aggregate_credits";
  static TV_SERIES_GENRES = ApiConstant.BASE_PATH + "genre/tv/list";

  //Search

  static MULTI_SEARCH = ApiConstant.BASE_PATH + "search/multi";
  
}
