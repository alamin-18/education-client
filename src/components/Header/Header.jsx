import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/Theme/Theme';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {
  const {dark,setDrak} = useContext(ThemeContext)
  const { user, logOut } = useContext(AuthContext)
  const [open,setOpen] = useState(false)

  const handleSingOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className="flex py-4 justify-between bg-slate-700">
        <div className="">
          <Link to='/' className=" ml-4 text-xl">daisyUI</Link>
        </div>
        <div onClick={()=> setOpen(!open)} className='w-8 md:hidden lg:hidden'>
        {open ?<XMarkIcon ></XMarkIcon>: <Bars3Icon></Bars3Icon>}
        </div>
        <div className={`flex mr-10 absolute duration-500 ease-in md:static lg:static bg-slate-700 ${open ? 'top-14' : 'top-[-150px]'}`}>
          <ul className=" sm:flex text-xl gap-6">
            <li><Link to='/course'>Course</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <div onClick={()=> setDrak(!dark)}>
            {
              dark ? <input  type="checkbox" className="toggle"  checked /> :
              <input  type="checkbox" className="toggle"  unchecked />
            }
            </div>
            
            {/* <li><Link to='/logIn'>Log In</Link></li>
            <li><Link to='/register'>SingUp</Link></li> */}
            <li>
              <div className='flex'>
                {
                  user?.uid ?
                    <>
                      <button onClick={handleSingOut} >Log out</button>
                    </>
                    :
                    <div>
                      <Link className='mr-2' to='/login'>Login</Link>
                      <Link to='/register'>Register</Link>
                    </div>
                }


              </div>
              <Link to="/profile">
                {user?.photoURL ?
                  <>
                  <div className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user.displayName} data-html="true">
                  <img className="mask mask-circle w-14" src={user.photoURL}  alt=''/>
                  </div>
                  </>
                  : ''
                }
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
