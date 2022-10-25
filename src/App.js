
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Navber/Main/Main';
import Course from './components/Course/Course';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path:'/',element: <Main></Main>,
     children:[
      {path:'/',element: <Home></Home>},
      {path:'/course',element: <Course></Course>,
    loader: ()=> fetch("http://localhost:5000/allcourse")
    },
      {path:'/faq',element: <Faq></Faq>},
      {path:'/logIn',element: <LogIn></LogIn>},
      {path:'/register',element: <Register></Register>}
    ]}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
