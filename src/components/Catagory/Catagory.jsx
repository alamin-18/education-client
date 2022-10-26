import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    return (
        <div className='text-3xl font-semibold'>
            <Link to={catagory.id}><h1>{catagory.CourseName}</h1></Link>
        </div>
    );
};

export default Catagory;