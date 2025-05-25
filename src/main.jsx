import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/CreateTrip';
import Header from './components/custom/Header';
import { Toaster } from 'sonner';
import LoginForm from './components/custom/LoginForm';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import ViewTrip from './view-trip/[tripId]/Index';

const routerConfig = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/create-trip",
    element : <CreateTrip/>
  },
  {
    path : "/login",
    element : <LoginForm />
  },
  {
    path : "/view-trip/:tripId",
    element : <ViewTrip />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={routerConfig} >
          <Toaster/>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
