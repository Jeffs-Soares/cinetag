import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio.jsx";
import App from "App.js";
import Favoritos from "pages/Favoritos/Favoritos.jsx";
import Player from "pages/Player/Player.jsx";
import NaoEncontrada from "pages/NaoEncontrada/NaoEncontrada.jsx";


const routes = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Inicio />,
        },
        {
          path: '/favoritos',
          element: <Favoritos />
        },
        {
          path: '/:id',
          element: <Player />
        },
        {
          path: '*',
          element: <NaoEncontrada />
        }
      ],
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router}>{children}</RouterProvider>
    </>
  );
};

export default routes;
