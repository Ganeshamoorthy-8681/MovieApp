import { AppAllMoviesAndTv } from "@cs/pages/common/app-movie-tv/AppMoviesAndTv";
import { AppBase } from "../components/app-layout/AppLayout";
import { MovieRoutes } from "@cs/router/movies/movies-route";

//For Lazy Loading in react v7 use lazy property in react router.
// Using react based lazy loading not supported.
// React router dom is deprecated in v7; 

export const AppRoutes = [
  {
    path: "/",
    element: <AppBase />,
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
      {
        path: "/tv",
        lazy: () => import("@cs/pages/tv/app-tv/AppTv").then((module) => ({ Component: module.AppTvSeries })),
        errorElement: <div>Something went wrong..</div>
      }
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

