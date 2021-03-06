import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, description, price, _id } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Country:{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>$ {price}</p>
                        <Link to={`/booknow/${_id}`}>
                            <button className="btn btn-info">Book now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;