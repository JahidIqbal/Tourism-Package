import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        const isReady = window.confirm('are you sure to add this order?');
        if (isReady) {
            fetch('https://scary-beast-34499.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })

                .then((res) => res.json())
                .then((result) => {
                    if (result.acknowledged) {
                        alert('order added successfully');

                    }
                });
            reset();
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5 text-center text-info">Book the Tour</h1>
            <div className="login-box">
                <div className="border border d-flex justify-content-center align-items-center bg-light">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Country name"
                                className="p-2 m-2"
                            />
                            <br />

                            <input
                                {...register("email", { required: true })} value={user.email}
                                placeholder="Email"
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("date", { required: true })}
                                placeholder="date"
                                defaultValue={new Date()}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("Address", { required: true })}
                                placeholder="City"
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("number", { required: true })}

                                placeholder="Phone number"
                                className="p-2 m-2"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Booking" className="btn btn-info w-50" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;