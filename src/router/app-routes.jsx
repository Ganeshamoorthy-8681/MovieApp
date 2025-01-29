import { AppAllMoviesAndTv } from "@cs/pages/common/app-movie-tv/AppMoviesAndTv";
import { AppBase } from "../components/app-layout/AppLayout";
import { MovieRoutes } from "@cs/router/movies/movies-route";
import { TvRoutes } from "@cs/router/tv/tv-routes";
import AppNotFound from "@cs/components/app-not-found/AppNotFound";

//For Lazy Loading in react v7 use lazy property in react router.
// Using react based lazy loading not supported.
// React router dom is deprecated in v7; 

export const AppRoutes = [
  {
    path: "/",
    element: <AppBase />,
    errorElement: <AppNotFound />,
    children: [
      {
        index: true,
        element: <AppAllMoviesAndTv />
      },
      {
        path: "/search",
        lazy: () => import("@cs/pages/common/app-search/AppSearch").then((module) => ({ Component: module.AppSearch }))
      },
      ...MovieRoutes,
      ...TvRoutes,
    ]

  },
];


//Other ways of defining routes (Jsx way)

// const routeDef = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<AppBase />} >
//       <Route index element={<AllMoviesAndTv />} />
//       <Route path="/movies" element={<AllMoviesAndTv />} />
//     </Route>
//   </Route>
// );


//Its used when define routes as Jsx way. Before React v6 we use switch instead of routes tag.
{/* <Routes>
  <Route path="/" element={<AppBase />}>
</Routes> */}

