import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Korzina from './components/Korzina';
import Pay from './components/Pay';

const rout = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },

    {
        path: '/Profile',
        element: <Profile />,
    },

    {
        path: '/Korzina',
        element: <Korzina />,
    },

    {
        path: '/Pay',
        element: <Pay />,
    },
]);

export default function Routs() {
    return (
        <RouterProvider router={rout} />
    );
}