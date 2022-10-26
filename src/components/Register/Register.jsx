import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const Register = () => {
    const {register,profileUpdate,googleSingin,gitHubSingin} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        register(email,password)
        .then( (result =>{
            const user = result.user
            console.log(user)
        }))
        .catch((error) => {
            console.error(error)
            // ..
          });

    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSingin = () =>{
        googleSingin(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .then(error => console.log(error))
    }
    const gitHubProvider = new GithubAuthProvider()
    const handleGitHubSingin = () =>{
        gitHubSingin(gitHubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .then(error => console.log(error))
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <Link to='/logIn' className="label-text-alt link link-hover text-violet-600">Already have a account Please Login?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing Up</button>
                            </div>
                        </div>
                        </form>
                        <div className="form-control mt-6">
                                <button onClick={handleGoogleSingin} className="btn btn-primary">Sing Up with Google</button>
                        </div>
                        <div className="form-control mt-6">
                                <button onClick={handleGitHubSingin} className="btn btn-primary">Sing Up with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;