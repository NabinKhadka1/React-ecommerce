import './App.css';
import Home from './components/Layouts/Home';
import About from './components/Layouts/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]) 

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
