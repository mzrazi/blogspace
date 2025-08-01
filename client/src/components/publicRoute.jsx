import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PublicRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return null; 

  if (user) {
   
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
