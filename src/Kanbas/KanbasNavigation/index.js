import { Link, useLocation } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { AiFillDashboard } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { BsFillCalendar2WeekFill } from 'react-icons/bs'
import { BsFillInboxFill } from 'react-icons/bs'
import { PiMonitorPlayBold } from 'react-icons/pi'
import './index.css'
function KanbasNavigation () {
  const links = [
    'Account',
    'Dashboard',
    'Courses',
    'Calendar',
    'Inbox',
    'History',
    'Studio',
    'Commons',
    'Help'
  ]

  const linkToIconMap = {
    Account: <BiUserCircle className='wd-icon' />,
    Dashboard: <AiFillDashboard className='wd-icon' />,
    Courses: <FaBook className='wd-icon' />,
    Calendar: <BsFillCalendar2WeekFill className='wd-icon' />,
    Inbox: <BsFillInboxFill className='wd-icon' />,
    History: <FaHistory className='wd-icon' />,
    Studio: <PiMonitorPlayBold className='wd-icon' />,
    Commons: <FaSignOutAlt className='wd-icon' />,
    Help: <BiSolidHelpCircle className='wd-icon' />
  }

  const { pathname } = useLocation()
  return (
    <div
      className='list-group wd-kanbas-navigation d-none d-sm-block'
      style={{
        width: 80
      }}
    >
      <img
        src='https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png'
        alt='Description_of_the_image'
        width=''
        height='80'
      />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && 'active'}`}
        >
          <i>{linkToIconMap[link]}</i>
          <br />
          {link}
        </Link>
      ))}
    </div>
  )
}
export default KanbasNavigation
