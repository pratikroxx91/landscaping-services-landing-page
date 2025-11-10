import React from 'react'

const Offer = () => {
    return (
        <>
            <section className='bg-[#6CAF5D] p-[100px]'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-white font-semibold text-7xl px-18'>Get a <span className='text-black'>Special Offer</span></h1>
                    <p className='text-white mt-8 font-semibold'>Subscribe to our Weekly Newsletter and get a 20% Discount for the next 3 month of our Service</p>
                </div>

                <div className='flex justify-center my-20'>
                    <img className='rounded-l-2xl' src="/images/placeholder_5.jpg" />
                    <div className='p-14 bg-white text-black rounded-r-2xl'>
                        <h4 className='text-3xl font-semibold mb-5'>Subscribe and Get 10% off for 2 months</h4>
                        <p>Receive all the latest news and insights about gardening, landscaping, tree care and many other things directly to your email address as soon as we post them and get a 10% Discount for the next 2 month of our Services</p>
                        <input className='w-full my-4 border-2 h-14 rounded-full p-4' type="text" placeholder='Enter your email address' />
                        <button className='w-full my-4 text-white font-semibold text-xl h-18 rounded-full bg-[#6CAF5D] hover:bg-[#5aa24e]'>Get the Offer</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer
