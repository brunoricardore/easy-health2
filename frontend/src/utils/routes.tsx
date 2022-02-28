import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import AppContainer from '../views/AppContainer';
import Home from '../views/Home';
import Schedule from '../views/Schedule';

const Login = lazy(() => import('../views/Login'))

export const APP_ROUTES: RouteObject[] = [

    {
        path: '',
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/schedule',
                element: <Schedule />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Navigate to="/home" />
    }
]