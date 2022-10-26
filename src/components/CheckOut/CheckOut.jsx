import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOutData = useLoaderData()
    console.log(checkOutData);
    return (
        <div className='flex justify-center mb-[28rem]'>
            <div className=' border border-red-600 p-10'>
                <h1 className='text-3xl font-semibold mb-4'>{checkOutData.CourseName}</h1>
                <h1 className='text-2xl font-semibold mb-4'>Price:{checkOutData.basicInfo[0].Price}</h1>
                <button className="btn btn-outline btn-primary ">Pay With PayPal</button>
            </div>
        </div>
    );
};

export default CheckOut;