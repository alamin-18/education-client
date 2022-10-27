import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-[10rem] font-bold'>404</h1>
            <p className='text-xl'>Opps ! somthing is Wrong</p>
            <Link className='text-xl text-violet-600' to='/'> Go Back Home</Link>
            </div>
        </div>
    );
};

export default Error;