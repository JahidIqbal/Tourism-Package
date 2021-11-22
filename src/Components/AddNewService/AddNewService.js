import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('https://scary-beast-34499.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');

                }
            })
        reset();
    }

    return (
        <div className="container ">
            <h5 className="mt-5 text-center bg-info w-50 mx-auto text-white">Adding New Service <i className="fas fa-user-plus"></i></h5>
            <div className="login-box w-100">
                <div className="border border d-flex justify-content-center align-items-center bg-light ">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Country name"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input {...register("img", { required: true })}
                                placeholder="image url"
                                className="p-2 m-2 w-100" />
                            <br />
                            <textarea {...register("Description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100" />
                            <br />


                            <input type="number" {...register("price", { required: true })} placeholder="price" className="p-2 m-2 w-100" />

                            <br />




                            <input type="submit" value="Add" className="btn btn-info w-25" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewService;