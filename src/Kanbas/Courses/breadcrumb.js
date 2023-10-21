import React from 'react'
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'
import '../index.css'
import db from '../Database'
import { FaBars } from 'react-icons/fa'
import { BiGlassesAlt } from 'react-icons/bi'

const Breadcrumb = () => {
  const { courseId } = useParams()
  const { pathname } = useLocation()
  const [empty, kanbas, courses, id, screen] = pathname.split('/')
  const course = db.course
  return (
    <i className='fa fa-bars ' aria-hidden='true'>
      <nav
        style={{
          '--bs-breadcrumb-divider':
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
          marginLeft: '50px',
          marginTop: '10px',
          fontSize: '20px',
          display: 'flex'
        }}
        aria-label='breadcrumb'
      >
        <ol className='breadcrumb' style={{ flex: '1' }}>
          <li className='breadcrumb-item'>
            <a href='#' style={{ textDecoration: 'none', color: 'red' }}>
              <FaBars style={{ marginRight: '10px', fontSize: '30px' }} />
              CS5200.MERGED.202330
            </a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            {screen}
          </li>
        </ol>
        <button>
          <BiGlassesAlt style={{ width: '30px', fontSize: '20px' }} />
          Student View
        </button>
      </nav>
      <hr style={{ marginLeft: '20px' }}></hr>
    </i>
  )
}

export default Breadcrumb
