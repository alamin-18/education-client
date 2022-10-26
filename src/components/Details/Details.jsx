import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";


const Details = () => {
    const details = useLoaderData()
    console.log(details);
    const { CourseDescription, CourseName, Instructor, basicInfo, picture, group } = details;
    const ref = React.createRef();
    return (
        <div ref={ref} className='w-2/4 mx-auto border border-red-600'>

            <img className='' src={picture} alt="" />
            <div className='p-10'>
                <small>{group}</small>
                <h1 className='text-3xl font-bold'>{CourseName}</h1>
                <div className='flex justify-between mt-10'>
                    <div>
                        <h1 className='text-2xl font-bold mb-10'>COURSE INSTRUCTOR</h1>
                        <div className='flex gap-4'>
                            <img className='w-32' src={Instructor[0].img} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>{Instructor[0].name}</h1>
                                <p>{Instructor[0].des}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-10'>BASIC INFORMATION</h1>
                        <div>
                            <h1 className='text-2xl font-bold'>Price: {basicInfo[0].Price}</h1>
                            <h1 className='text-2xl font-bold'>Lessons:{basicInfo[0].Lessons}</h1>
                            <h1 className='text-2xl font-bold'>Started:{basicInfo[0].Started}</h1>
                            <h1 className='text-2xl font-bold'>Class:{basicInfo[0].Class}</h1>
                        </div>
                    </div>
                </div>
                <h1 className='text-3xl font-bold mt-10 mb-4'>Course Description</h1>
                <p>{CourseDescription}</p>
                <Link to={`../checkout/${details.id}`}><button className="btn btn-outline btn-primary rounded-none mt-5 w-full">Apply</button></Link>
            </div>
            <div>

            </div>
            <ReactToPdf targetRef={ref} filename="details.pdf">
                {({ toPdf }) => (
                    <button className="btn btn-danger btn-sm" onClick={toPdf}>
                        Generate pdf
                    </button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default Details;