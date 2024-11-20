import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import Leaderboard from './Pages/LeaderBoard';
import Story from './Pages/Story';
import LearningVideo from './Pages/LearningVideo';
import FablesCategory from './components/Category/FablesCategory';








const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/profile",
    element: <UserProfile/>,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
  },
  {
    path: "/story",
    element: <Story/>,
  },
  {
    path: "/learning-video",
    element: <LearningVideo/>,
  },
  {
    path: "/fables",
    element: <FablesCategory/>,
  },

 


 
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
