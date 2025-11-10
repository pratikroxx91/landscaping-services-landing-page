import React from 'react'

const Contact = () => {
    return (
        <>
            <section id='contact' className='p-[100px]'>
                <div className='flex flex-col items-center space-y-4'>
                    <h1 className='text-[#6CAF5D] font-semibold text-7xl px-18'>Contact <span className='text-black'>Us</span></h1>
                    <p className='mt-8 font-semibold'>Leave all the info in the form below and wait up to 24 hours for help from our Customer Support Manager</p>
                </div>

                <div className='flex justify-center my-20'>
                    <img className='rounded-l-2xl' src="/images/placeholder_6.jpg" />
                    <div className='min-w-2xl p-10 bg-[#6CAF5D] text-white rounded-r-2xl'>
                        <h4 className='text-xl font-semibold'>Full Name</h4>
                        <input className='w-full my-4 border h-14 rounded-full p-4' type="text" placeholder='Enter your full name' />
                        <h4 className='text-xl font-semibold'>Email</h4>
                        <input className='w-full my-4 border h-14 rounded-full p-4' type="text" placeholder='Enter your email' />
                        <h4 className='text-xl font-semibold'>Message</h4>
                        <input className='w-full my-4 border h-14 rounded-full p-4' type="text" placeholder='Enter your message' />
                        <button className='w-full my-4 text-[#6CAF5D] font-semibold text-xl h-18 rounded-full bg-white hover:bg-[#f4f4f4]'>Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
