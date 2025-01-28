export const MovieRoutes = [
  {
    path: "/movies",
    lazy: () => import("@cs/pages/movies/app-movie/AppMovie").then((module) => ({ Component: module.AppMovies }))
  },
  {
    path: "/movies/:id",
    lazy: () => import("@cs/pages/movies/app-movie-summary/AppMovieSummary").then((module) => ({ Component: module.AppMovieSummary })),
    children: [
      {
        path: "video/:videoId",
        lazy: () => import("@cs/pages/common/app-video/AppVideo").then((module) => ({ Component: module.AppVideo }))
      }
    ]
  },
  {
    path: "/movies/trend",
    lazy: () => import("@cs/pages/movies/app-trend-movie/AppTrendMovies").then((module) => ({ Component: module.default })),
  },
  {
    path: "/movies/top-rated",
    lazy: () => import("@cs/pages/movies/app-top-rated-movies/AppTopRatedMovie").then((module) => ({ Component: module.AppTopRatedMovies })),
  },
  {
    path: "/movies/upcoming",
    lazy: () => import("@cs/pages/movies/app-upcoming-movies/AppUpcomingMovies").then((module) => ({ Component: module.AppUpcomingMovies })),
  },
  {
    path: "/movies/now-playing",
    lazy: () => import("@cs/pages/movies/app-now-playing-movies/AppNowPlayingMovies").then((module) => ({ Component: module.AppNowPlayingMovies })),
  },
  {
    path: "/movies/popular",
    lazy: () => import("@cs/pages/movies/app-popular-movies/AppPopularMovies").then((module) => ({ Component: module.AppPopularMovies })),
  }
];
