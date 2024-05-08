import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/Utils";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }: ProtectedRouteProps) => {
  const isAuth = getLocalStorageItem<boolean>("isAuth") ?? false;
  return isAuth ? children : <Navigate to='/' />;
};
