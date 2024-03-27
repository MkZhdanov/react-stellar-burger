import React, { FC } from "react";
import Loader from "../loader/loader";

interface IRenderContentProps {
  isLoading: boolean;
}

const RenderContent: FC<IRenderContentProps> = ({ isLoading, children }) => {
  // Проверка наличия загрузки данных
  if (isLoading) {
    return <Loader />;
  }
  return <>{children}</>;
};

export default RenderContent;
