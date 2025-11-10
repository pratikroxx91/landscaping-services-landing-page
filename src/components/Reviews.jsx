import React from 'react'

const Reviews = () => {
    const ratings = [
        {
            name: "Satara Notur",
            feedback: "Customer Support Group works awesome! I have received a feedback from the Tree Care Consultant in about a hour after leaving a message.",
            position: "Carnegie Hall Artistic Director",
            photo: "/images/pic1.jpg"
        },
        {
            name: "Moses Beier",
            feedback: "The WeTree Team are taking care of my small garden for almost a year as of now and I am not planning to get rid of my Premium Plan any soon.",
            position: "Dynamic Mobility Director",
            photo: "/images/pic2.jpg"
        },
        {
            name: "Garry Rohan",
            feedback: "Last morning saw WeTree Lawn Care Group doing their job at my neighbor’s site and asked them  if they could do mine as well, which they did just an hour after. I didn’t know that my site can look so good.",
            position: "Corporate Intranet Architect",
            photo: "/images/pic3.jpg"
        },
        {
            name: "Heidi Stamm",
            feedback: "My favorite tree got sick last week and I had no idea how to take care of it, so I called the WeTree. They immediately sent a Tree Care Consultant to my house and even gave me a Discount for using the service!",
            position: "Internal Creative Agent",
            photo: "/images/pic4.jpg"
        }
    ]
    return (
        <div>
            <section className='p-[100px]'>
                <div className='flex flex-col items-center'>

                    <h1 className='font-semibold text-7xl text-center px-18'>See <span className='text-[#6CAF5D]'>What Our Clients Say</span> About <span className='text-[#6CAF5D]'>WeTree</span>
                    </h1>
                    <p className='mt-8 font-semibold text-center'>Take a look at our client’s comments and reviews regarding WeTree Service, Customer Support and many other things</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12 p-15">
                    {ratings.map((rating) => (
                        <div className='rounded-xl shadow-xl px-6 py-12 bg-[#6CAF5D] text-white'>

                            <p>{rating.feedback}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col'>
                                    <h3 className='my-6 font-semibold text-3xl flex items-center gap-5'>{rating.name}</h3>
                                    <p className='text-sm'>{rating.position}</p>
                                </div>

                                <img className='rounded-full' src={rating.photo} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Reviews
