import React from 'react'
import CourseHero from "../components/Coursescomponents/CourseHero"
import CoursesContent from '../components/Coursescomponents/CoursesContent'
import CourseInstructor from '../components/Coursescomponents/CourseInstructor'
import CourseOverview from '../components/Coursescomponents/CourseOverview'
import CourseIncludes from '../components/Coursescomponents/CourseIncludes'

const Course = () => {
  return (
    <div>
      <CourseHero />
      <CoursesContent />
      <CourseInstructor />
      <CourseOverview />
      <CourseIncludes />
    </div>
  )
}

export default Course