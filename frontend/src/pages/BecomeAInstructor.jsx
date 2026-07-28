import React from 'react'
import InstructorHero from '../components/BecomeAInstructorComponents/InstructorHero'
import WhyTeach from '../components/BecomeAInstructorComponents/WhyTeach'
import HowItWorks from '../components/BecomeAInstructorComponents/HowItWorks'
import InstructorBenefits from '../components/BecomeAInstructorComponents/ InstructorBenefits'
import FAQ from '../components/BecomeAInstructorComponents/FAQ'
import InstructorCTA from '../components/BecomeAInstructorComponents/InstructorCTA'
const BecomeAInstructor = () => {
  return (
    <div>
        <InstructorHero />
        <WhyTeach />
        <HowItWorks />
        <InstructorBenefits/>
        <FAQ />
        <InstructorCTA />
    </div>
  )
}

export default BecomeAInstructor