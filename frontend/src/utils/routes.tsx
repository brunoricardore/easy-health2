import { RouteObject } from 'react-router-dom';
import { Home } from '../views/Home';

export const APP_ROUTES: RouteObject[] = [
    {
        path: '',
        element: <Home />,
    }
]