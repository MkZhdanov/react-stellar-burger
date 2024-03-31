import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import Loader from "../loader/loader";

interface IProtectedProps {
  unAuth?: boolean;
  component: React.ReactNode;
}

const ProtectedRouteElement: FC<IProtectedProps> = ({
  unAuth = false,
  component,
}) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const isAuthChecked = useSelector((state) => state.auth.userAuth);

  if (!isAuthChecked) {
    //Запрос еще выполняется
    return <Loader />;
  }

  if (unAuth && user) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!unAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !UnAuth && user Пользователь авторизован и роут для авторизованного пользователя
  return <>{component}</>;
};

export const Auth = ProtectedRouteElement;
export const UnAuth: FC<IProtectedProps> = ({ component }) => (
  <ProtectedRouteElement unAuth={true} component={component} />
);
