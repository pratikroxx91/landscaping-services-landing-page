import React from 'react'

const Register = () => {

    return (
        <>
            <section id='register' className='p-[100px]'>

                <div className='flex flex-col items-center p-10 space-y-10'>
                    <h1 className='font-semibold text-7xl text-center px-18'>Create a <span className='text-[#6CAF5D]'>Personal Profile</span> and <span className='text-[#6CAF5D]'>Get 20% Discount</span>
                    </h1>
                    <p className='mt-8 font-semibold text-center'>Create your own site’s Personal Profile and receive an extra bonus for using our Services.</p>
                </div>

                <div className="bg-[#6CAF5D] text-white rounded-xl p-10 space-y-10">

                    <div>
                        <h4 className="font-semibold text-2xl mb-6">General Info</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col space-y-5">
                                <label>First Name</label>
                                <input className="border p-3 rounded-full" placeholder="Enter your first name" />

                                <label>Email Address</label>
                                <input className="border p-3 rounded-full" placeholder="Enter your email address" />

                                <label>Home Address</label>
                                <input className="border p-3 rounded-full" placeholder="Enter your home address" />
                            </div>

                            <div className="flex flex-col space-y-5">
                                <label>Last Name</label>
                                <input className="border p-3 rounded-full" placeholder="Enter your last name" />

                                <label>Phone Number</label>
                                <input className="border p-3 rounded-full" placeholder="Enter your phone number" />

                                <label>Profile Picture</label>
                                <input className="border p-3 rounded-full" placeholder="Upload your profile picture (<40MB)" />
                            </div>
                        </div>
                    </div>


                    <hr />

                    <h4 className='font-semibold text-2xl mt-8'>Site's Info</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='flex flex-col space-y-5'>
                            <h6 className='mt-5'>Location of the Site</h6>
                            <input className='border p-3 mt-2 rounded-full' type="text" placeholder="Enter your site's address" />

                            <h6 className='mt-5'>Plants and Trees</h6>
                            <input className='border p-3 mt-2 rounded-full' type="text" placeholder='Tell us the types of trees you have' />
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h6 className='mt-5'>Size of the Site</h6>
                            <input className='border p-3 mt-2 rounded-full' type="text" placeholder='Enter the Size of the Site' />

                            <h6 className='mt-5'>The Site's Photos (Optional)</h6>
                            <input className='border p-3 mt-2 rounded-full' type="text" placeholder='Upload up to 10 photos' />
                        </div>
                    </div>
                    <div className='flex jusify-center text-center'>
                        <button className='w-full my-4 text-[#6CAF5D] font-semibold text-xl h-18 rounded-full bg-white mx-18 hover:bg-[#f4f4f4]'>Create a Profile</button>
                    </div>
                </div>
                <div id='login' className='p-[50px]'>
                    <div className='flex flex-col items-center'>
                        <h2 className='mt-20 font-semibold text-center text-4xl'>Already Have a Profile?</h2>
                        <button className='my-4 bg-[#6CAF5D] font-semibold text-xl h-18 w-48 rounded-full text-white mt-8 hover:bg-[#5aa24e]'>Log In</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
