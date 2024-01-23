import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//bringing in pages the router will use to conditionally show the appropriate views
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    //defining accessible routes
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />
            }
        ]
    }
])




ReactDOM.createRoot(document.getElementbyId('root')).render(<RouterProvider router={router} />);