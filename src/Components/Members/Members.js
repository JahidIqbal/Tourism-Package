import React from 'react';
import photgrapher from '../../Images/photographer.jpg'
import travelconsultant from '../../Images/travel consultant.jpg'
import { Link } from 'react-router-dom';

import travelguide from '../../Images/travel guide.jpg'

const Members = () => {
    return (

        <div className="mt-5 bg-light container">
            <h2 className=" fw-bolder">Our <span className="text-info">Professional</span> Members</h2>
            <div className="card-group">
                <div className="card">
                    <img src={photgrapher} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">Henry</h3>
                        <span className="text-info text-bold">Photographer</span>
                        <p className="card-text">He takes Professional photograph.One of the best photgrapher we provided for our people.</p>
                    </div>
                    <div className="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-info " to=""></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={travelconsultant} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">Mona</h5>
                        <span className="text-info text-bold">Travel consultant
                        </span>
                        <p className="card-text">Mona is a travel consultant.He take care of our people's food and accomodation.</p>
                    </div>
                    <div className="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-info " to=""></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={travelguide} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">John</h5>
                        <span className="text-info text-bold">Travel Guider
                        </span>
                        <p class="card-text">John is one experienced travel guider of our team.He properly make the whole plan of tour.</p>
                    </div>
                    <div class="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-info " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-info " to=""></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Members;