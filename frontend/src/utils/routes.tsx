import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
// import { Home } from '../views/Home';

const Home = lazy(() => import('../views/Home'))

export const APP_ROUTES: RouteObject[] = [
    {
        path: '',
        element: <Home />,
    }
]