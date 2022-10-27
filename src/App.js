
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Navber/Main/Main';
import Course from './components/Course/Course';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import CheckOut from './components/CheckOut/CheckOut';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import { useContext } from 'react';
import  { ThemeContext } from './Contexts/Theme/Theme';
import { Toaster } from 'react-hot-toast';
import Error from './components/Error/Error';
import Blog from './components/Blog/Blog';
import Profile from './components/Profile/Profile';


function App() {
  const {dark} = useContext(ThemeContext)
  const router = createBrowserRouter([
    {path:'/',element: <Main></Main>,
    errorElement:<Error></Error>,
     children:[
      {path:'/',element: <Home></Home>},
      {path:'/course',element: <Course></Course>,
    loader: ()=> fetch("http://localhost:5000/allcourse")
    },
      {path:'/course/:id',element: <Details></Details>,
    loader: ({params})=> fetch(`http://localhost:5000/allcourse/${params.id}`)
    },
      {path:'/faq',element: <Faq></Faq>},
      {path:'/logIn',element: <LogIn></LogIn>},
      {path:'/register',element: <Register></Register>},
      {path:'/checkout/:id',element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
      loader: ({params})=> fetch(`http://localhost:5000/allcourse/${params.id}`)
    },
    {path:'/blog',element:<Blog></Blog>},
    {path:'/profile',element:<Profile></Profile>}
    ]}
  ])
  return (
    <div data-theme={dark ? `light`:`dark`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
