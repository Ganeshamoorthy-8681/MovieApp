export const TvRoutes = [
  {
    path: "/tv",
    lazy: () => import("@cs/pages/tv/app-tv/AppTv").then((module) => ({ Component: module.AppTvSeries }))
  },
  {
    path: "/tv/trend",
    lazy: () => import("@cs/pages/tv/app-trend-tv/AppTrendTvSeries").then((module) => ({ Component: module.AppTrendingTvSeries })),
  },
  {
    path: "/tv/top-rated",
    lazy: () => import("@cs/pages/tv/app-top-rated/AppTopRated").then((module) => ({ Component: module.AppTopRated })),
  },
  {
    path: "/tv/today",
    lazy: () => import("@cs/pages/tv/app-airing-today/AppAiringToday").then((module) => ({ Component: module.AppAiringToday })),
  },
  {
    path: "/tv/week",
    lazy: () => import("@cs/pages/tv/app-airing-week/AppAiringWeek").then((module) => ({ Component: module.AppAiringWeek })),
  },
  {
    path: "/tv/popular",
    lazy: () => import("@cs/pages/tv/app-popular-tv/AppPopularTv").then((module) => ({ Component: module.AppPopularTvSeries })),
  },
  {
    path: "/tv/:id",
    lazy: () => import("@cs/pages/tv/app-tv-summary/AppTvSummary").then((module) => ({ Component: module.AppTvSeriesSummary })),
    children: [
      {
        path: "video/:videoId",
        lazy: () => import("@cs/pages/common/app-video/AppVideo").then((module) => ({ Component: module.AppVideo }))
      }
    ]
  },
];
