import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout";
import Index from "./page/Index";
import Course from "./page/Books";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Signup from "./page/Signup";
import { Toaster } from 'react-hot-toast';
import AuthProvider, { UserContext } from "./context/AuthProvider";
import { useContext } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddCart from "./page/AddCart";

// ProtectedRoute component
const ProtectedRoute = ({ component }) => {
  const [authUser] = useContext(UserContext);
  return authUser ? component : <Navigate to="/signup" />;
};

// Create the router after defining ProtectedRoute
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Index />} />
      <Route path="/books" element={<ProtectedRoute component={<Course />} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<AddCart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
