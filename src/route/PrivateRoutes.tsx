import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: IProps) => {
  if (!localStorage.getItem("id")) {
    return <Navigate to="/login" />;
  }
  return children;
};
