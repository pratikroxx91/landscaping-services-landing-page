import React from 'react'

const WhoWeAre = () => {
    return (
        <>
            <section id='about' className='p-[100px]'>
                <div className='max-w-8xl'>
                    <div className='w-10/12'>
                        <h1 className='text-6xl font-semibold tracking-wide leading-tight'>
                            <span className='text-[#6CAF5D]'>Improve your gardening</span> know-how {""}
                            <span className='text-[#6CAF5D]'>with our</span> expert-written {""}
                            <span className='text-[#6CAF5D]'>knowledge</span> base.</h1>
                    </div>
                    <div className='w-6/12 mt-6'>
                        <p className='font-medium'>WeTree is one of the leading outdoor maintenance providers with more than 1500 served gardens and 93.83% positive feedback according to our internal rating system.</p>
                    </div>
                </div>

                {/* Cards */}

                {/* Text Cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 items-start mt-15'>
                    <div className='space-y-12'>
                        <div className='p-10 min-h-68 rounded-2xl shadow-xl'>
                            <h3 className='text-2xl font-semibold mb-6'>Who We Are?</h3>

                            <p>We provide all types of gardening, landscaping, tree surgery and outdoor maintenance services in all aspects of London, Surrey, Sussex, Essex, Kent, Berkshire, Oxford, Reading, Liverpool, Manchester, Chester, and Bristol, constantly expanding to new territories in England through our franchise. </p>
                        </div>

                        <div className='p-10 max-h-68 rounded-2xl shadow-xl'>
                            <h3 className='text-2xl font-semibold mb-6'>What We Do?</h3>

                            <p>More than 15 gardening, landscaping, tree care, and outdoor maintenance services from one provider, using the most high’tech technologies and innovation. As such, the professionals we work with adhere to the franchise quality standards set by the company, which guarantees our customers a hassle-free service with great results. </p>
                        </div>

                        <div className='p-10 min-h-68 rounded-2xl shadow-xl'>
                            <h3 className='text-2xl font-semibold mb-6'>Our Mission</h3>

                            <p>As a leading service provider in England, we’ve always aimed to improve our customers’ experience when using us. We’ve taken that effort to the next level and turned it into our 360 degrees happiness philosophy. That means we always strive to ease our customers’ and franchisees’ lives by creating a hassle-free service for all sides involved.  </p>
                        </div>
                    </div>

                    {/* Images */}

                    <div className='flex flex-col items-end'>
                        <img src="/images/placeholder_2.png" alt="gardening image" />
                        <img src="/images/placeholder_3.png" alt="planting image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre
