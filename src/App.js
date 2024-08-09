
import './App.css';
import Home from './components/home';
import Fullsize from './components/fullsize';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '/fullsize',
    element:<Fullsize/>,
  },
]);

function App() {
 

  

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
