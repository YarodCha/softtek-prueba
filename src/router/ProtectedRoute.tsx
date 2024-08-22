import { Navigate, Outlet } from "react-router-dom";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { useAuthentication } from "../hooks/useAuthentication";

const ProtectedRoute = () => {
  const { getLocalUser } = useAuthentication();
  const isAuthenticated = getLocalUser();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
