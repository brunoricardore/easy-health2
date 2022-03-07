import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const AppContainer = lazy(() => import('../views/AppContainer'));
const Login = lazy(() => import('../views/Login'));
const Home = lazy(() => import('../views/Home'));
const Schedule = lazy(() => import('../views/Schedule'));
const Register = lazy(() => import('../views/Register'));

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
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '*',
        element: <Navigate to="" />
    }
]