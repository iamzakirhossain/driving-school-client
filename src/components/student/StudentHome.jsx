import React from 'react'
import StudentAppBar from './StudentAppBar'
import UpcomingStudentClass from './UpcomingStudentClass'
import StudentCalendar from './StudentCalendar'

const StudentHome = () => {
  return (
    <>
        <StudentAppBar/>
        <UpcomingStudentClass/>
        <StudentCalendar/>
    </>
  )
}

export default StudentHome