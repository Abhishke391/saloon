import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facere, nesciunt cumque, voluptates ipsam aperiam maxime tempore mollitia deleniti ad, iusto asperiores? Earum recusandae amet, ratione sint quis fugiat pariatur labore aliquam minus deserunt eos aperiam ad magni iure, neque at! Qui inventore tempore ipsa, nulla officiis adipisci libero a.</p>
            </div>

            {/* center section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>074-33-83-502</li>
                    <li>pulasthiabishake06@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* Copyright text */}
            <hr />
            <p className='py-5 text-sm text-center'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default Footer