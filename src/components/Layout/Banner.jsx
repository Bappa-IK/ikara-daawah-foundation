import React from 'react'
import logo from '../images/logo.jpg'

export default function Banner() {
  return (
    <div className='header'>
        <article>
            <div className="banner">
                <img src={logo} alt="logo" className='banner--img' />
            </div>
            <aside className='banner--details'>
                <h2>Ikara da'awah foundation</h2>
                <p>
                  The nature of IKARA DA"AWA FOUNDATION is a non-profitable 
                  and non-political organization, but purely religious, 
                  humanitarian and charitable in nature
                </p>
                <a href="/contact"><button className='donate'>Donate </button></a>
            </aside>
        </article>
    </div>
  )
}
