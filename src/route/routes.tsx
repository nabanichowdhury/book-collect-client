import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { BookDetails } from "../components/BookDetails";
import { Books } from "../components/Books";
import AddBook from "../pages/AddBook";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { SignUp } from "../pages/SignUp";

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
    element: <AddBook />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
