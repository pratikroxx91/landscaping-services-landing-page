import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <>
            <section className="fixed top-0 left-0 w-full z-50 bg-black/50 text-white shadow-md backdrop-blur-sm">
                <nav className="max-w-7xl mx-auto flex items-center justify-around py-5 text-lg">
                    <h1 className="text-4xl font-semibold"><a href="#home">WeTree</a></h1>
                    <ul className="flex items-center gap-10 font-semibold">
                        <li className='hover:text-gray-300'><a href="#home">Home</a></li>
                        <li className='hover:text-gray-300'><a href="#services">Services</a></li>
                        <li className='hover:text-gray-300'><a href="#about">About</a></li>
                        <li className='hover:text-gray-300'><a href="#blog">Blog</a></li>
                    </ul>
                    <div className="flex items-center gap-5 font-semibold">
                        <Button type='primary'><a href="#login">Log In</a></Button>
                        <Button type='secondary'><a href="#register">Sign Up</a></Button></div>

                    <div className="flex items-center gap-3">
                        <img src="/icons/search.png" alt="search" />
                        <img src="/icons/cart.png" alt="cart" />
                        <img src="/icons/profile.png" alt="profile" />
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar
