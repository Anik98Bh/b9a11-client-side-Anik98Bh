import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Queries from "../components/Queries/Queries";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import RecommendationsForMe from "../pages/shared/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../pages/shared/MyQueries/MyQueries";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/queries",
          element: <Queries></Queries>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/recommendationsForMe",
          element: <RecommendationsForMe></RecommendationsForMe>
        },
        {
          path: "/myQueries",
          element: <MyQueries></MyQueries>
        },
      ],
    },
  ]);


  export default router;