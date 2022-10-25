import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <div className="navbar bg-slate-700">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/course'>Course</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/logIn'>Log In</Link></li>
            <li><Link to='/register'>SingUp</Link></li>
            <li>{user.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
