import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div>
        <div>

            {/* left section */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facere, nesciunt cumque, voluptates ipsam aperiam maxime tempore mollitia deleniti ad, iusto asperiores? Earum recusandae amet, ratione sint quis fugiat pariatur labore aliquam minus deserunt eos aperiam ad magni iure, neque at! Qui inventore tempore ipsa, nulla officiis adipisci libero a.</p>
            </div>

            {/* center section */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right section */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer