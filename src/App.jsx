import { RouterProvider } from "react-router";
import './App.css';
import { router } from "./router/router";
import { GenresContextProvider } from "@cs/context/Genres-provider";


function App()
{
  return <>
    <GenresContextProvider>
      <RouterProvider router={router} />
    </GenresContextProvider>
  </>;

}

export default App;
