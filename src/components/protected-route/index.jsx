/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return Navigate("/");
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
