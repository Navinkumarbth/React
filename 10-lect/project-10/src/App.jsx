
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import MockTests from './components/MockTests';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

//*************************************React-Router**************************************/

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/about",
      element:
        <div>
          <Navbar />
          <About />
        </div>
    },
    {
      path: "/dashboard",
      element:
        <div>
          <Navbar />
          <Dashboard />
        </div>,
      children: [
        {
          path: 'courses',
          element: <Courses />
        },
        {
          path: 'mock-tests',
          element: <Reports />
        },
        {
          path: 'reports',
          element: <MockTests />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
  ]
);


function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
