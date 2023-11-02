import React from 'react'
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
function Courses ({ courses }) {
  const { courseId } = useParams()

  const course = courses.find(course => course._id === courseId)

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