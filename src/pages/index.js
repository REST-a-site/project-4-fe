import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Info from '../components/Info'
import Reserve from '../components/Reserve'
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
        <Sidebar />
        <Navigation />
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
