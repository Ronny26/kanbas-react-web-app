import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../Database'
import './index.css'
import { AiFillCheckCircle, AiOutlineEnter } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import {
  addModule,
  deleteModule,
  updateModule,
  setModule
} from './modulesReducer'

function ModuleList () {
  const { courseId } = useParams()
  const modules = useSelector(state => state.modulesReducer.modules)
  const module = useSelector(state => state.modulesReducer.module)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='wd-new-container'>
        <button className='button' style={{ width: 'fixed' }}>
          Collapse All
        </button>
        <button className='button'>View Progress</button>
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
        <li
          className='list-group-item'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center', // For vertical centering
              width: '100%',
              marginBottom: '10px'
            }}
          >
            <input
              value={module.name}
              style={{
                flex: '0.50',
                marginRight: '10px',
                padding: '5px',
                border: '1px solid #ccc'
              }}
              onChange={e =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />

            <div style={{ display: 'flex' }}>
              <button
                className='btn btn-primary'
                style={{ marginRight: '10px' }}
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
              <button
                className='btn btn-success'
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
              >
                Add
              </button>
            </div>
          </div>
          <textarea
            value={module.description}
            style={{ width: '50%', padding: '5px', border: '1px solid #ccc' }}
            onChange={e =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {modules
          .filter(module => module.course === courseId)
          .map((module, index) => (
            <li key={index} className='list-group-item'>
              <h3>
                {module.name}{' '}
                <button
                  className='btn btn-success'
                  style={{ float: 'right' }}
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger'
                  style={{ float: 'right' }}
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
              </h3>
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
