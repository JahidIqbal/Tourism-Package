import React from 'react';
import Banner from '../Banner/Banner';
import Members from '../Members/Members';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Members></Members>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;