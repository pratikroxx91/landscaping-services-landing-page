import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <section id='home' className="text-white bg-[url('images/placeholder_1.png')] bg-cover bg-center h-250 pt-[100px]">

            {/* Hero Text */}
            <div className='space-y-14 sm:pt-12'>
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-tight">
                        Garden as an <br /> art form
                    </h1>
                    <p className="font-semibold text-[28px] mt-10 px-40">
                        Take advantage of garden maintenance, landscaping, tree surgery and more other services, provided to you by a group of educated and highly experienced professionals.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-9 font-semibold">
                    <Button type='primary'><a href="#contact">Contact Us</a></Button>
                    <Button type='secondary'><a href="#chooseUs">Learn More</a></Button>
                </div>

                {/* Stats Section */}
                <div className="flex justify-center my-14">
                    <ul className="flex justify-around items-center h-35 w-[1100px] bg-white rounded-4xl text-black py-12 divide-x-2 divide-black-400">
                        <li className="flex flex-col items-center px-8">
                            <h2 className='text-5xl font-semibold'>18+</h2>
                            <p className='mt-3'>years of experience</p>
                        </li>
                        <li className="flex flex-col items-center px-8">
                            <h2 className='text-5xl font-semibold'>1.5k+</h2>
                            <p className='mt-3'>clients countrywide</p>
                        </li>
                        <li className="flex flex-col items-center px-8">
                            <h2 className='text-5xl font-semibold'>20+</h2>
                            <p className='mt-3'>public projects</p>
                        </li>
                        <li className="flex flex-col items-center px-8">
                            <h2 className='text-5xl font-semibold'>30+</h2>
                            <p className='mt-3'>employees</p>
                        </li>
                        <li className="flex flex-col items-center px-8">
                            <h2 className='text-5xl font-semibold'>4k+</h2>
                            <p className='mt-3'>trees planted</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;

