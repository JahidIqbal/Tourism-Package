import React from 'react';
import image from '../../Images/tourist-doing-surprise-gesture_1368-7050.jpg'

const Banner = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center ">
                <div className="col-md-6 justify-content-center align-items-center mt-4">
                    <h1 className="h1 font-weight-bold text-uppercase">Explore <span className="text-info">unlimited!</span> <br />
                        for the best <span className="text-info">Vacations!</span></h1>
                    <p className="font-italic font-weight-bold">Travelling is one of the most interesting things you can do in your life. While you always make sure to get the best tour in your travel, you should get the right place to complement the Vacations.Travelling is like a chocolate box. Don’t matter what you get. All is good.Never stop doing things for the first time.
                    </p>
                </div>

                <div className="col-md-6">
                    <img className="w-100" src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;