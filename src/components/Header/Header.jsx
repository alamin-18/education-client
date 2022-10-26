import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/Theme/Theme';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const Header = () => {
  const {setDrak} = useContext(ThemeContext)
  const { user, logOut } = useContext(AuthContext)
  const handleSingOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className="navbar drak:bg-slate-700">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none sm:d-none">
          <ul className="menu menu-horizontal  p-0">
            <li><Link to='/course'>Course</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <input onClick={()=> setDrak(true)} type="checkbox" className="toggle" unchecked />
            {/* <li><Link to='/logIn'>Log In</Link></li>
            <li><Link to='/register'>SingUp</Link></li> */}
            <li>
              <>
                {
                  user?.uid ?
                    <>
                      <button onClick={handleSingOut} >Log out</button>
                    </>
                    :
                    <>
                      <Link to='/login'>Login</Link>
                      <Link to='/register'>Register</Link>
                    </>
                }


              </>
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
