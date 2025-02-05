import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import "./App.css";

import LandingPage from "./Pages/LandingPage";
import English from "./Pages/English";
import Amharic from "./Pages/Amharic";
import Tigrinya from "./Pages/Tigrinya";
import StandAlone from "./Pages/StandAlone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/StandAlone", element: <StandAlone /> },
    ],
  },
  // Routes without MainLayout
  { path: "/english", element: <English /> },
  { path: "/amharic", element: <Amharic /> },
  { path: "/tigrinya", element: <Tigrinya /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
