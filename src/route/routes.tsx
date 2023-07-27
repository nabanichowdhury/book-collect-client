import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { BookDetails } from "../components/BookDetails";
import { Books } from "../components/Books";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ReadListBook from "../pages/ReadListBook";
import { SignUp } from "../pages/SignUp";
import WishListBook from "../pages/WishListBook";
import { PrivateRoute } from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/book-details/:id",
    element: <BookDetails />,
  },
  {
    path: "/add-book",
    element: (
      <PrivateRoute>
        <AddBook />,
      </PrivateRoute>
    ),
  },

  {
    path: "/edit-book/:id",
    element: <EditBook />,
  },
  {
    path: "wish-list",
    element: (
      <PrivateRoute>
        <WishListBook />,
      </PrivateRoute>
    ),
  },
  {
    path: "read-list",
    element: (
      <PrivateRoute>
        <ReadListBook />,
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
