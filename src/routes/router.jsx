import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Queries from "../components/Queries/Queries";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import RecommendationsForMe from "../pages/shared/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../pages/shared/MyQueries/MyQueries";
import MyRecommendations from "../pages/shared/MyRecommendations/MyRecommendations";
import AddQueries from "../pages/shared/MyQueries/AddQueries/AddQueries";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import QueryDetails from "../components/QueryDetails/QueryDetails";
import UpdateQueries from "../pages/shared/MyQueries/UpdateQueries/UpdateQueries";

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
          element: <Queries></Queries>,
          loader: ()=>fetch('http://localhost:5000/queries')
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
          path: "/queries/:id",
          element: <QueryDetails></QueryDetails>,
          loader: ()=>fetch(`http://localhost:5000/queries`)
        },
        {
          path: "/recommendationsForMe",
          element: <RecommendationsForMe></RecommendationsForMe>
        },
        {
          path: "/myQueries",
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
        },
        {
          path: "/addQueries",
          element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
          path: "/updateQueries/:id",
          element: <UpdateQueries></UpdateQueries>,
          loader: ()=>fetch(`http://localhost:5000/queries`)
        },
        {
          path: "/myRecommendation",
          element: <MyRecommendations></MyRecommendations>
        },
      ],
    },
  ]);


  export default router;