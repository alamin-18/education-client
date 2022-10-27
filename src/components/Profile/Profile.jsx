import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const Profile = () => {
    const navigate =useNavigate()
    const {profileUpdate} =useContext(AuthContext)
        const handleSubmit = event => {
            event.preventDefault();
            const form = event.target
            const name = form.name.value
            const photoUrl = form.photoUrl.value
    
            const profile = {displayName:name,photoURL:photoUrl}
                profileUpdate(profile)
                .then(() => {
                    // Profile updated!
                    toast.success("profile update")
                  }).catch((error) => {
                    // An error occurred
                    toast.error()
                  });
                  navigate('./')
    
        }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name" className="input input-bordered" name='name' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" className="input input-bordered" name='photoUrl' />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">profile update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;