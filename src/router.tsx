import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PartnerPage from './pages/PartnerPage';
import AuthPage from './pages/AuthPage';
import CommunityPage from './pages/CommunityPage';
import TournamentPage from './pages/TournamentPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'partner',
        element: <PartnerPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
      {
        path: 'tournament',
        element: <TournamentPage />,
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;