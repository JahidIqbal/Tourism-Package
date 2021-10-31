import React from 'react';
import reviewone from '../../Images/people-1.jpg'
import reviewtwo from '../../Images/people-2.jpg'
import reviewthree from '../../Images/people-3.jpg'
const Reviews = () => {
    return (
        <div className="container mt-4">
            <h2 className=" fw-bolder bg-info text-white">Our Loveable Customers</h2>
            <div className="row text-center">
                <div className="col-md-4 mb-4 ">

                    <div>
                        <img className="rounded-circle w-50 " alt="100x100" src={reviewone}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Monica</h4>
                        <small className="text-warning">Banker</small>
                        <p>One of the best Tourist service.Quality service with excellent behaviour.</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 mb-4">

                    <div>
                        <img className="rounded-circle w-50" alt="100x100" src={reviewtwo}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Richard</h4>
                        <small className="text-warning">Teacher</small>
                        <p>Feel blessed to be part of this tourism company.Their services and behaviour was super awesome</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 mb-4">

                    <div>
                        <img className="rounded-circle w-50" alt="100x100" src={reviewthree}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Racel</h4>
                        <small className="text-warning">Developer</small>
                        <p>I take my kids for a tour with this company.I must say they just provide what we needed.Great Service!</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Reviews;