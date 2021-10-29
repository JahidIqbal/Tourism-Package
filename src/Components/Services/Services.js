import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mx-auto mt-5 bg-light">
            <h2 className=" fw-bolder">Explore our <span className="text-info">Tour</span> Packages </h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {
                    services.map(service => <Service service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;