import { Route, Routes, Navigate, useParams } from 'react-router'
import KanbasNavigation from './KanbasNavigation'
import Courses from './Courses'
import Account from './Account'
import Dashboard from './Dashboard'

import { useState, useEffect } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import axios from 'axios'

function Kanbas () {
  const { courseId } = useParams()
  const URL = 'http://localhost:4000/api/courses'
  const [courses, setCourses] = useState([])
  const [course, setCourse] = useState({
    _id: '0',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15'
  })
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course)
    console.log(course)
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          return course
        } else {
          return c
        }
      })
    )
    setCourse({
      _id: '0',
      name: '',
      number: '',
      startDate: '2023-09-10',
      endDate: '2023-12-15'
    })
  }
  const deleteCourse = async course => {
    const response = await axios.delete(`${URL}/${course}`)
    setCourses(courses.filter(c => c._id !== course))
  }
  const addNewCourse = async () => {
    const response = await axios.post(URL, course)
    setCourses([response.data, ...courses])
    setCourse({ name: '' })
  }

  const findAllCourses = async () => {
    const response = await axios.get(URL)
    setCourses(response.data)
  }
  useEffect(() => {
    findAllCourses()
  }, [])

  return (
    <Provider store={store}>
      <div className='d-flex'>
        <div>
          <KanbasNavigation />
        </div>
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Navigate to='Dashboard' />} />
            <Route path='Account' element={<Account />} />
            <Route
              path='Dashboard'
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  updateCourse={updateCourse}
                  deleteCourse={deleteCourse}
                />
              }
            />
            <Route
              path='Courses/:courseId/*'
              element={<Courses courses={courses} />}
            />
            <Route path='Calendar' element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  )
}
export default Kanbas
