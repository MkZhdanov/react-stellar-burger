import PropTypes from "prop-types";
import Loader from "../loader/loader";

export default function RenderContent({ isLoading, children }) {
  // Проверка наличия загрузки данных
  if (isLoading) {
    return <Loader />;
  }
  return children;
}

RenderContent.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
