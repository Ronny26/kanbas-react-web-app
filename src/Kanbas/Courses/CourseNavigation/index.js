import { Link, useParams, useLocation } from 'react-router-dom'
import './index.css'
function CourseNavigation () {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom Meetings',
    'Assignments',
    'Quizes',
    'Grades',
    'People',
    'Panatop Videos',
    'Discussion',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcome',
    'Collabration',
    'Syllabus',
    'Program Reports (EAB Outcomes)',
    'Settings'
  ]
  const { courseId } = useParams()
  const { pathname } = useLocation()
  return (
    <div className='wd-course-navigation d-none d-sm-block'>
      <div className='list-group' style={{ width: 150 }}>
        <span class='section-tabs-header-subtitle ellipsis'>
          202410_2 Fall 2023 Semest...
        </span>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && 'active'}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CourseNavigation
