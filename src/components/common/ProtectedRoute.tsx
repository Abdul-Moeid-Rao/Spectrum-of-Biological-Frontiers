import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const ProtectedRoute: React.FC = () => {
    const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-brand-navy">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-teal"></div>
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
