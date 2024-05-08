import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import StudentLogin from './Components/StudentLogin';
import StudentRegister from './Components/StudentRegister';
import TeacherLogin from './Components/TeacherLogin';
import TeacherRegister from './Components/TeacherRegister';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/studentLogin",
        element: <StudentLogin></StudentLogin>
      },
      {
        path:"/studentRegister",
        element: <StudentRegister></StudentRegister>,
      },
      {
        path:"/teacherLogin",
        element: <TeacherLogin></TeacherLogin>,
      },
      {
        path:"/teacherRegister",
        element: <TeacherRegister></TeacherRegister>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
