import React, { useEffect, useState } from 'react';

const AddNewServiceDetails = () => {
    const [addServices, setAddServices] = useState([])
    useEffect(() => {
        fetch('https://scary-beast-34499.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])
    const { name, Description, img, price } = addServices[0] || {}
    return (
        <div>
            <div className="col ">
                <div className="card h-100 shadow-lg">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Country:{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {Description}</p>
                        <p className="text-nowrap"><strong >Price:</strong> $ {price}</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AddNewServiceDetails;