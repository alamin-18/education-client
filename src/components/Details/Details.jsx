import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details);
    const {CourseDescription,CourseName,Instructor,basicInfo,picture,group} =details
    return (
        <div className='w-2/4 mx-auto'>
            <img className='' src={picture} alt="" />
            <div>
                <h1 className='text-2xl font-bold'>COURSE INSTRUCTOR</h1>
                <div className='flex gap-4'>
                    <img className='w-32' src={Instructor[0].img} alt=""/>
                    <div>
                    <h1 className='text-xl font-semibold'>{Instructor[0].name}</h1>
                    <p>{Instructor[0].des}</p>
                    </div>
                </div>
                <h1 className='text-2xl font-bold'>BASIC INFORMATION</h1>
                <div>
                    <h1 className='text-2xl font-bold'>Price: {basicInfo[0].Price}</h1>
                    <h1 className='text-2xl font-bold'>Price:{basicInfo[0].price}</h1>
                    <h1 className='text-2xl font-bold'>Price:{basicInfo[0].price}</h1>
                    <h1 className='text-2xl font-bold'>Price:{basicInfo[0].price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Details;