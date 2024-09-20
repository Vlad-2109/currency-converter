import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/homePage/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
