import db from '../Database'
import { Link } from 'react-router-dom'
import { React, useState } from 'react'
import './index.css'
function Dashboard ({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}) {
  return (
    <div style={{ marginLeft: 40 }}>
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className='form-control'
        onChange={e => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className='form-control'
        onChange={e => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className='form-control'
        type='date'
        onChange={e => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className='form-control'
        type='date'
        onChange={e => setCourse({ ...course, endDate: e.target.value })}
      />

      <button onClick={addNewCourse}>Add</button>

      <div style={{ marginLeft: 40 }}>
        <h2>Published Courses ({courses.length})</h2>
        <hr style={{ marginRight: 20 }}></hr>

        <div className='d-flex '>
          <div
            className='col-sm-6 col-md-4 col-lg-3 mt-4 '
            style={{ flexGrow: 1 }}
          >
            {courses.map((course, index) => (
              <div
                className='card h-10 card-inverse card-primary'
                style={{ margin: 30, width: 260, display: 'inline-flex' }}
              >
                <div
                  className='solid-color-bg'
                  style={{ height: 150, backgroundColor: '#3498db' }}
                />

                <div class='card-body'>
                  <h5 class='card-title ic-DashboardCard__header-title ellipsis'>
                    <a
                      href='#'
                      style={{
                        color: 'rgb(0, 118, 184)',
                        textDecoration: 'none'
                      }}
                    >
                      {course.name}
                    </a>
                  </h5>
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className='btn btn-primary'
                  >
                    {course.name}
                  </Link>
                  <p class='card-text'>
                    {course.number} {course.name}
                    <br></br>202410_1 Fall 2023 semester full term
                  </p>
                  <div className='d-flex'>
                    <button
                      style={{ flexGrow: '1' }}
                      onClick={event => {
                        event.preventDefault()
                        deleteCourse(course._id)
                      }}
                    >
                      Delete
                    </button>
                    <button
                      style={{ flexGrow: '1' }}
                      onClick={event => {
                        event.preventDefault()
                        setCourse(course)
                      }}
                    >
                      Edit
                    </button>{' '}
                    <button onClick={updateCourse}>Update</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
