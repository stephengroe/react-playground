import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './routes/root';
import AppPage from './routes/AppPage';
import './index.css';

const components = [
  
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root components={components} />,
    children: [
      {
        path: '/:slug',
        element: <AppPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
