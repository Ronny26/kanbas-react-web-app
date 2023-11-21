import './index.css'

import { FaUserCircle } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

function Account () {
  return (
    <div>
      <div className='wd-flex-title-container'>
        <div className='wd-flex-grow-1'>
          <a href='edit.html'>
            <i style={{ marginRight: '20px' }}>
              <FaBars />
            </i>
          </a>
          <label>Priyanshu Srivastava's Profile</label>
          <hr style={{ margin: 0, marginLeft: 0, marginRight: 35 }} />
        </div>
      </div>
      <div className='d-flex'>
        <div>
          <ul className='wd-course-navigation'>
            <li>
              <a href='#'>Notifications</a>
            </li>
            <li className='wd-active'>
              <a href='index.html'>Profile</a>
            </li>
            <li>
              <a href='#'>Files</a>
            </li>
            <li>
              <a href='#'>Settings</a>
            </li>
            <li>
              <a href='../assignments/assignments.html'>Assignment</a>
            </li>
            <li>
              <a href='#'>E-Portfolio</a>
            </li>
            <li>
              <a href>Shared content</a>
            </li>
            <li>
              <a href='#'>The Hub</a>
            </li>
            <li>
              <a href='#'>Qwickly course tools</a>
            </li>
            <li>
              <a href='#'>Global Announcements</a>
            </li>
          </ul>
        </div>
        <div className='wd-flex-grow-1 wd-main-navigation'>
          <div className='wd-flex-row-main-cotainer'>
            <div>
              <i>
                <FaUserCircle
                  className='wd-icon'
                  style={{ color: 'lightgray' }}
                />
              </i>
            </div>
            <div>
              <form action='edit.html'></form>
            </div>
          </div>
          <h2>Priyanshu Srivastava</h2>
          <br />
          <br />
          <h3>Contact</h3>
          <label>
            No Registered Services. Add some at the
            <a href='#' style={{ marginLeft: 0 }}>
              settings
            </a>
            page.
          </label>
          <br />
          <br />
          <h3>Biography</h3>
          <label>Student of Khoury College of Computer Science</label>
          <br />
          <br />
          <h3>Links</h3>
          <label>
            <a href='https://www.youtube.com/@WebDevTV/videos'>
              Youtube
              <i className='fa fa-sign-out' aria-hidden='true' />
            </a>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Account
