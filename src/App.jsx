import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import "./App.css";

import LandingPage from "./Pages/LandingPage";
import English from "./Pages/English";
import Amharic from "./Pages/Amharic";
import Tigrinya from "./Pages/Tigrinya";
import StandAlone from "./Pages/StandAlone";
import AmharicChannel from "./Components/Channels/Amharic/AmharicChannel";
import TigrinyaChannel from "./Components/Channels/Tigrinya/TigrinyaChannel";
import EnglishChannel from "./Components/Channels/English/EnglishChannel";

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
  { path: "/englishChannel", element: <EnglishChannel /> },
  { path: "/amharicChannel", element: <AmharicChannel /> },
  { path: "/tigrinyaChannel", element: <TigrinyaChannel /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
