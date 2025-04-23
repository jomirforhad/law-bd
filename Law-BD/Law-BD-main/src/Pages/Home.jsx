import React, { Suspense, useEffect } from 'react';
import Banner from '../Components/Banner';
import Lawyers from '../Components/Lawyers';
import LawServices from '../Components/LawServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Lawyers />
            <LawServices/>
        </div>
    );
};

export default Home;