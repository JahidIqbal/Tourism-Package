import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const ServiceDetails = () => {
    let { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/places")
            .then(res => res.json())
            .then((data) => {
                const foundService = data.filter(detail => detail._id == id)
                setServiceDetails(foundService);
            })
    }, [])

    const { name, description, image, price } = serviceDetails[0] || {}
    return (
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className=" col-md-6">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >Country:{name}</strong></p>
                            <p className="card-text"> <strong>Description:</strong> {description}</p>

                            <p className="text-nowrap"><strong >Price:</strong> $ {price}</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <PlaceOrder></PlaceOrder>
                </div>
            </div>

        </div>

    );
};

export default ServiceDetails;