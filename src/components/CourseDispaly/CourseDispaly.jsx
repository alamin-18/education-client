import React from 'react';
import { Link } from 'react-router-dom';

const CourseDispaly = ({ course }) => {
    const { CourseName, CourseDescription, group, picture, id } = course
    return (
        <div>
            <div className='border border-red-600'>
                <img src={picture} alt="" />
                <div className='p-10'>
                    <p>{group}</p>
                    <h1 className='text-2xl font-bold mb-5'>{CourseName}</h1>
                    <p>{CourseDescription.slice(0, 100) + '...'}</p>
                    <Link to={`../course/${id}`}><button className="btn btn-outline btn-primary rounded-none mt-5">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDispaly;