import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import db from '../../Database'

import { FaEllipsisV } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'
import './index.css'
import AssignmentEditor from './AssignmentEditor'

function Assignments () {
  const { courseId } = useParams()
  const assignments = db.assignments
  const courseAssignments = assignments.filter(
    assignment => assignment.course === courseId
  )
  const [showEditor, setShowEditor] = useState(false)
  return (
    <div>
      <div
        className='wd-new-container'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <input
          type='text'
          placeholder='Search For Assignments'
          style={{ marginRight: '10px', height: '40px' }}
        ></input>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className='button'>
            <i
              className='fa fa-plus '
              aria-hidden='true'
              style={{ marginRight: '5px' }}
            />
            <HiPlusSm style={{ color: 'black', marginBottom: '4px' }} />
            Group
          </button>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              marginLeft: '10px'
            }}
            onClick={() => setShowEditor(true)}
          >
            <i
              className='fa fa-plus '
              aria-hidden='true'
              style={{ marginRight: '5px' }}
            />
            {showEditor && <AssignmentEditor />}
            <HiPlusSm style={{ color: 'white', marginBottom: '4px' }} />
            Assignment
          </button>
          <button className='btn' style={{ marginLeft: '10px' }}>
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <hr></hr>
      <h2>Assignments for course {courseId}</h2>
      <div className='list-group'>
        {courseAssignments.map(assignment => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className='list-group-item'
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Assignments
