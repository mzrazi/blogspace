import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();

  if (authLoading) return <div>Loading...</div>; 
  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
};


export default ProtectedRoute;