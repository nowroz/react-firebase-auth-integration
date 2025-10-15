import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
