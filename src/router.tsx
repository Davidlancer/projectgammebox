import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PartnerPage from './pages/PartnerPage';
import AuthPage from './pages/AuthPage';
import CommunityPage from './pages/CommunityPage';
import TournamentPage from './pages/TournamentPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        element: <ProfilePage />,
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;