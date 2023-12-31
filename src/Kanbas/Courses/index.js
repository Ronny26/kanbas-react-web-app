import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

import db from '../Database'
import CourseNavigation from './CourseNavigation'
import Modules from './Modules'
import Home from './Home'
import Assignments from './Assignments'
import AssignmentEditor from './Assignments/AssignmentEditor'
import Grades from './Grades'
import Breadcrumb from './breadcrumb'
function Courses () {
  const { courseId } = useParams()
  const URL = 'http://localhost:4000/api/courses'
  const [course, setCourse] = useState({})
  const findCourseById = async courseId => {
    const response = await axios.get(`${URL}/${courseId}`)
    setCourse(response.data)
  }
  useEffect(() => {
    findCourseById(courseId)
  }, [courseId])

  return (
    <div>
      <Breadcrumb />
      <CourseNavigation />
      <div>
        <div
          className='overflow-y-scroll position-fixed bottom-0 end-0'
          style={{
            left: '320px',
            top: '80px'
          }}
        >
          <Routes>
            <Route path='/' element={<Navigate to='Home' />} />
            <Route path='Home' element={<Home />} />
            <Route path='Modules' element={<Modules />} />
            <Route path='Assignments' element={<Assignments />} />
            <Route
              path='Assignments/:assignmentId'
              element={<AssignmentEditor />}
            />
            <Route path='Grades' element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Courses
