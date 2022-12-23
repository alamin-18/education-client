import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='../course'><button className="btn btn-primary mr-6">Course</button></Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media.istockphoto.com/id/1354641564/photo/multiracial-group-of-university-students-e-learning-on-laptop-at-campus.jpg?b=1&s=170667a&w=0&k=20&c=-QbiwNoEIAZ6KvJ6CLV1DS2HTduqSIJ_jhej6XDP634=" className=" " alt='' />
                    <div>
                        <h1 className="text-5xl font-bold mb-4">Welcome To Our Campus</h1>
                        <h1 className="text-xl font-bold">Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry’s standard.</h1>
                        <p className="py-6">Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s when an unknown printerit to make a type specimen book.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-center my-10'>Our Skilled Instructors</h1>
                <div className='lg:w-2/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
                        <figure><img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/357/c1886f3710b06e187044a39689872fae.jpeg" alt="Shoes" /></figure>
                        <div className="my-4 ml-2">
                            <h2 className="card-title">
                                Daziy Millar
                            </h2>
                            <p>Business Studys</p>
                        </div>
                    </div>
                    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
                        <figure><img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/353/5c1b826d17206cfcbf53ac41f0dc8dc7.jpeg" alt="Shoes" /></figure>
                        <div className="my-4 ml-2">
                            <h2 className="card-title">
                                Tom Steven
                            </h2>
                            <p>CSE Department</p>
                        </div>
                    </div>
                    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
                        <figure><img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/356/cd35d7ff8516eadf2078ad687f305ae1.jpeg" alt="Shoes" /></figure>
                        <div className="my-4 ml-2">
                            <h2 className="card-title">
                                Rosy Janner
                            </h2>
                            <p>EEE Department</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid max-w-screen-xl my-10 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1357693397/photo/european-female-call-center-oparator-in-headset-with-mic-working-during-winter-holidays.jpg?b=1&s=170667a&w=0&k=20&c=N1rfN9loSgVdG2XwRHDoZ-T9pCk7cQ06TWW0ihUZbyg=" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800 input input-bordered" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full input input-bordered p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800 textarea textarea-bordered"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Home;