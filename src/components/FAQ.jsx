import React from 'react'

const FAQ = () => {
    return (
        <>
            <section id='faq' className='p-[100px]'>
                <div className='flex flex-col items-center'>

                    <h1 className='font-semibold text-7xl text-center px-18'><span className='text-[#6CAF5D]'>F</span>requently <span className='text-[#6CAF5D]'>A</span>sked <span className='text-[#6CAF5D]'>Q</span>uestions
                    </h1>
                    <p className='mt-8 font-semibold text-center'>In this section you can find all the answers you are probably looking for. If you still struggle with finding one - don’t hesitate to contact us directly.</p>
                </div>

                {/* Accordion */}

                <div className='text-white p-5 mt-10'>
                    <div className="collapse collapse-arrow shadow-2xl bg-[#6CAF5D] text-white p-8 mb-4">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold text-2xl">How can I schedule an appointment?</div>
                        <div className="collapse-content text-sm">Setting up an appointment with us is simple. You can call us, submit an online request, enter our online chat facility, or use our GoFantastic App, which lets you book your whole service in just 4 clicks. If you have an account with us, you can even text us to secure an appointment.</div>
                    </div>
                    <div className="collapse collapse-arrow shadow-2xl bg-[#6CAF5D] text-white p-8 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-2xl">How often should I schedule lawn maintenance?</div>
                        <div className="collapse-content text-sm">Most lawns benefit from weekly or bi-weekly maintenance depending on the season and growth rate. We also offer flexible packages so you can choose a schedule that fits your property and budget.</div>
                    </div>
                    <div className="collapse collapse-arrow shadow-2xl bg-[#6CAF5D] text-white p-8 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-2xl">Do you handle seasonal clean-ups?</div>
                        <div className="collapse-content text-sm">Yes — we offer spring and fall clean-ups to remove leaves, weeds, debris, and prep your yard for the season ahead so your landscape stays healthy year-round.</div>
                    </div>
                    <div className="collapse collapse-arrow shadow-2xl bg-[#6CAF5D] text-white p-8 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-2xl">Are your services pet- and eco-friendly?</div>
                        <div className="collapse-content text-sm">We prioritize safe and eco-friendly practices. Upon request, we can use organic fertilizers and pet-safe products to keep your family and furry friends protected.</div>
                    </div>
                    <div className="collapse collapse-arrow shadow-2xl bg-[#6CAF5D] text-white p-8 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-2xl">Do you offer free estimates?</div>
                        <div className="collapse-content text-sm">Yes! We provide free on-site estimates to evaluate your landscape needs and recommend the best service options. No obligation—just honest, transparent pricing.</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ
