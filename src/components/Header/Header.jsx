import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-700">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link>Course</Link></li>
      <li><Link>FAQ</Link></li>
      <li><Link>Course</Link></li>
      <li><Link>Course</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;
