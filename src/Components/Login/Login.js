import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container w-50">
            <h1 className="mt-5 text-center text-info ">Please Login</h1>
            <div className="login-box ">
                <div className="border border d-flex justify-content-center align-items-center bg-light">
                    <div className="login-form mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Your Email" />

                            <br />

                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Your password" />

                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <button className="btn btn-warning" onClick={handleGoogleLogin}><i className="fa fa-google text-primary" ></i>  Login with Google
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;