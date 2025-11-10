import React from 'react'

const Blogs = () => {
    return (
        <>
            <section id='blog' className='p-[100px]'>
                <div className='flex flex-col items-center'>

                    <h1 className='font-semibold text-7xl text-center px-18'>Our <span className='text-[#6CAF5D]'>Blogs</span> and <span className='text-[#6CAF5D]'>Articles</span>
                    </h1>
                    <p className='mt-8 font-semibold text-center'>Take a look at our Company’s Blog Series or read some  professional gardening insights and news.</p>
                </div>

                <div className='grid grid-cols-3'>
                    <div className='p-14'>
                        <div className='space-y-4'>
                            <img src="/images/blog1.jpg" />
                            <span className='text-[#6CAF5D] font-semibold'>Insight</span>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-2xl'>Manure Using</h3>
                            <div className='flex justify-start space-x-2'>
                                <img src="/icons/comment.svg" /> <span>3</span>
                                <img src="/icons/eye.svg" /> <span>400+</span>
                                <img src="/icons/calendar.svg" /> <span>1 month ago</span>
                            </div>
                            <p>Using manure in the garden can significantly enhance soil fertility and promote the healthy growth of your plants and veggies. Before learning when is the best time to put manure in your garden, let’s get a closer look at what is actually manure and what types you can find depending on your preferences.</p>
                        </div>
                    </div>
                    <div className='p-14'>
                        <div className='space-y-4'>
                            <img src="/images/blog2.jpg" />
                            <span className='text-[#6CAF5D] font-semibold'>Blog #14</span>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-2xl'>Flower Care</h3>
                            <div className='flex justify-start space-x-2'>
                                <img src="/icons/comment.svg" /> <span>18</span>
                                <img src="/icons/eye.svg" /> <span>6,5k+</span>
                                <img src="/icons/calendar.svg" /> <span>2 months ago</span>
                            </div>
                            <p>Are you dreaming of an exotic garden full of flowers with hard to pronounce names that will awe your guests? An understandable dream. But most tropical green life are not meant to grow in the weather conditions that the UK offers. However, below we have prepared a list of tropical plants that can live in.</p>
                        </div>
                    </div>
                    <div className='p-14'>
                        <div className='space-y-4'>
                            <img src="/images/blog3.jpg" />
                            <span className='text-[#6CAF5D] font-semibold'>News</span>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-2xl'>Garden Privacy</h3>
                            <div className='flex justify-start space-x-2'>
                                <img src="/icons/comment.svg" /> <span>9</span>
                                <img src="/icons/eye.svg" /> <span>1k+</span>
                                <img src="/icons/calendar.svg" /> <span>5 months ago</span>
                            </div>
                            <p>Everyone wants to have a place of peace and silence where they can be alone with their thoughts or even not think at all. And what better spot than a calm, beautiful garden. However, nowadays achieving the much-needed solitude is becoming harder and harder, especially if you’re surrealy aware.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
