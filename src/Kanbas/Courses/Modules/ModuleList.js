import React from 'react'
import { useParams } from 'react-router-dom'
import db from '../../Database'
import './index.css'
import { AiFillCheckCircle, AiOutlineEnter } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'

function ModuleList () {
  const { courseId } = useParams()
  const modules = db.modules
  return (
    <div>
      <div className='wd-new-container'>
        <button className='btn'>Collapse All</button>
        <button className='btn'>View Progress</button>
        <div className='dropdown'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <i
              className='fa fa-check-circle'
              aria-hidden='true'
              style={{ marginRight: 4, color: 'green' }}
            />
            <AiFillCheckCircle
              style={{
                fontSize: '15px',
                color: 'green',
                marginBottom: '4px'
              }}
            />
            Publish All
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <button style={{ backgroundColor: 'red', color: 'white' }}>
          <i
            className='fa fa-plus '
            aria-hidden='true'
            style={{ marginRight: 5 }}
          />
          <HiPlusSm
            style={{
              color: 'white',
              marginBottom: '4px'
            }}
          />
          Module
        </button>
        <button className='btn'>
          <FaEllipsisV />
        </button>
      </div>

      <hr></hr>
      <ul className='list-group'>
        {modules
          .filter(module => module.course === courseId)
          .map((module, index) => (
            <li key={index} className='list-group-item'>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              {module.lessons && (
                <ul className='list-group'>
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className='list-group-item'>
                      <h4>{lesson.name}</h4>
                      <p>{lesson.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}
export default ModuleList
