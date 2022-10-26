import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import CourseDispaly from '../CourseDispaly/CourseDispaly';

const Course = () => {
    const educationData = useLoaderData()

    return (
        <div className='lg:grid lg:grid-cols-[1fr_4fr] gap-4 lg:w-11/12 mx-auto'>
            <div className='ml-10 border p-8'>
                <h1 className='text-5xl font-bold mb-8'>Our Courses</h1>
                {
                    educationData.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
            <div className='grid lg:grid-cols-3 gap-6 ml-40 p-5' >
                {
                    educationData.map(course => <CourseDispaly course={course} key={course.id}></CourseDispaly>)
                }
            </div>
        </div>
    );
};

export default Course;