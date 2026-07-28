import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedCourses from '../components/FeaturedCourses'
import Choose from '../components/Choose'
import TopInstructors from '../components/TopInstructors'
import Testimonials from '../components/Testimonials'
import Statistics from '../components/Statistics'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <CategoriesSection />
        <FeaturedCourses />
        <Choose />
        <TopInstructors />
        <Testimonials />
        <Statistics />
        <CTA />
    </div>
  )
}

export default Home