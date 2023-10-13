import React from 'react'
import Header from './Header'
import Shop from './Shop'
import Deal from './Deal'
import About from './About'
import Testimonial from './Testimonial'
import Sale from './Sale'
import News from './News'
import Company from './Company'
import Footer from './Footer'
import NavBar from './NavBar'


const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Shop />
            <Deal />
            <About />
            <Testimonial />
            <Sale />
            <News />
            <Company />
            <Footer />
        </div>
    )
}

export default HomePage