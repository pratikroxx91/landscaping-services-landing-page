import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='bg-[#6CAF5D] p-[100px]'>
                <div className='grid grid-cols-5 gap-12 text-white'>

                    <div className='space-y-6'>
                        <h2 className='font-semibold text-4xl'>WeTree</h2>
                        <p>Improve your gardening know-how with our expert-written knowledge base.</p>
                    </div>
                    <div className='space-y-6'>
                        <h4 className='font-semibold text-xl'>Navigation</h4>
                        <ul className='space-y-4'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <h4 className='font-semibold text-xl'>Contact Us</h4>
                        <ul className='space-y-6'>
                            <li className='flex gap-3'><img src="/icons/Mail.svg" />Daija6@gmail.com</li>
                            <li className='flex gap-3'><img src="/icons/Map.svg" />New Hallie, 32574 Cummerata Vista</li>
                            <li className='flex gap-3'><img src="/icons/Phone.svg" />317-757-5201</li>
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <h4 className='font-semibold text-xl'>Learn More</h4>
                        <ul className='space-y-4'>
                            <li>General Info</li>
                            <li>Jobs</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <h4 className='font-semibold text-xl'>Social</h4>
                        <div className='flex gap-4'>
                            <span><img src="/icons/facebook.svg" /></span>
                            <span><img src="/icons/twitter.svg" /></span>
                            <span><img src="/icons/youtube.svg" /></span>
                            <span><img src="/icons/instagram.svg" /></span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer
