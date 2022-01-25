import { Navigate, Outlet } from 'react-router-dom';

import { Landing } from '@/features/misc';

const App = () => {
  return <Outlet />;
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
];
