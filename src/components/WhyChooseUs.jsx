import React from 'react'

const WhyChooseUs = () => {
    return (
        <>
            <section id='chooseUs' className='p-[100px]'>
                <div className='grid grid-cols-[500px_auto] gap-20'>
                    <div>
                        <img className='drop-shadow-2xl rounded-xl' src="/images/placeholder_4.png" alt="landscaping" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-7xl'>They Choose Us</h1>

                        <p className='mt-10'>There are numbers of reasons why our clients are always happy with the services we provide to them and a hundred more, why we keep engaging even more customers by exploring new fields of cervices and still believing in our root  quality elements.</p>

                        <div className='mt-8 p-2'>
                            <ul className='text-3xl font-semibold tracking-tight'>
                                <li className='flex items-center gap-2.5 my-5'>
                                    <img className='mr-8' src="/images/tick.jpg" />Concrete
                                    <span className='text-[#6CAF5D]'>Timelines</span>
                                </li>
                                <li className='flex items-center gap-2.5 my-5'>
                                    <img className='mr-8' src="/images/tick.jpg" />Modern
                                    <span className='text-[#6CAF5D]'>Equipment</span>
                                </li>
                                <li className='flex items-center gap-2.5 my-5'>
                                    <img className='mr-8' src="/images/tick.jpg" />Enhanced
                                    <span className='text-[#6CAF5D]'>Security</span>
                                </li>
                                <li className='flex items-center gap-2.5 my-5'>
                                    <img className='mr-8' src="/images/tick.jpg" />Quality
                                    <span className='text-[#6CAF5D]'>Workmanship</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs
