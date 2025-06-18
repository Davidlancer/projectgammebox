import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Router from './router.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { ToastProvider } from './contexts/ToastContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <Router />
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);