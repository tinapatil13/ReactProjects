import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transaction from './pages/Transactions/Transactions';
import Support from './pages/Support/Support';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <Transaction/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);

const App = () => {
  return (
    <div>
         <RouterProvider router={router} />
     
    </div>
  )
}

export default App