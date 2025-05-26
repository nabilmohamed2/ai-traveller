import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/CreateTrip';
import Header from './components/custom/Header';
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from 'sonner';
import LoginForm from './components/custom/LoginForm';
import { Provider } from 'react-redux';
import appStore, { persistor } from './utils/appStore';
import ViewTrip from './view-trip/[tripId]/Index';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/create-trip",
    element: <CreateTrip />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip />
  }
],
  {
    basename: "/", // Ensure this is set correctly for Vercel
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routerConfig}>
          <Toaster />
        </RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
