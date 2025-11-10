import React from 'react'
import Button from './Button'

const Services = () => {

    const cards = [
        {
            title: "Lawn Care",
            description: "Keep your lawn in top shape without lifting a finger and  boost the appearance of your property.",
            icon: <img src="/icons/lawncare.jpg" />
        },
        {
            title: "Garden Maintenance",
            description: "Keep your green space lush and neat at all times. Book a team of two  professionals  and ensure that your plants look presentable.",
            icon: <img src="/icons/garden.jpg" />
        },
        {
            title: "Landscape & Garden Design",
            description: "Turn your dream garden into a reality with our experienced landscapers that can execute any type of garden makeover project.",
            icon: <img src="/icons/design.jpg" />
        },
        {
            title: "Tree Surgery",
            description: "Tree pruning, crown shaping, stump grinding & more operations, executed by educated and high-skilled professionals.",
            icon: <img src="/icons/tree.jpg" />
        },
        {
            title: "Fence Installation",
            description: "Provide privacy from nosy neighbors or give extra security for your family and pets by Installing any types of fences.",
            icon: <img src="/icons/fence.jpg" />
        },
        {
            title: "Plant Care",
            description: "Take care of every small plant that you have on your site, including flowers, bushes and small trees.",
            icon: <img src="/icons/plantcare.jpg" />
        }
    ]

    return (
        <>
            <section id='services' className='p-[100px]'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-semibold text-7xl'>Our <span className='text-[#6CAF5D]'>Services</span>
                    </h1>
                    <p className='mt-8 font-semibold'>See the detailed list of available Services we provide</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-12">
                    {cards.map((card) => (
                        <div className='rounded-xl shadow-xl px-6 py-12'>
                            <h3 className='text-[#6CAF5D] my-6 font-semibold text-3xl flex items-center gap-5'>{card.icon}{card.title}</h3>

                            <p>{card.description}</p>

                            <div className='flex justify-center mt-5'>
                                <Button type='primary'>More Info</Button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Services
