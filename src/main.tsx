import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='p-10'>Hellow, World!</div>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
