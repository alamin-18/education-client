import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const educationData = useLoaderData()
    console.log(educationData);
    return (
        <div className='grid grid-cols-[1fr_4fr]'>
            <div className=''>
                <h1 className='text-3xl'>This side ber</h1>
            </div>
            <div className=''>
                <h1 className='text-3xl'>This is course</h1>
            </div>
        </div>
    );
};

export default Course;