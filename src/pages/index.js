import React, { useState } from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Info from '../components/Info'
import Reserve from '../components/Reserve'
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navigation toggle={toggle} />
        <Hero />
        <Reserve />
        <Info />
        <Contact />
        <Info />
        <Footer />

        </>
    )
}

export default Home
