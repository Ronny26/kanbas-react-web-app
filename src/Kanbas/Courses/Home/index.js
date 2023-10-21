import ModuleList from '../Modules/ModuleList'
import './index.css'
function Home () {
  return (
    <div className='row'>
      <div className='col-10'>
        <ModuleList />
      </div>
      <div className='col-2'>
        <div
          className='wd-main-navigation  d-none d-lg-block'
          style={{ position: 'relative', marginLeft: 30 }}
        >
          <h4>Course Status</h4>
          <div>
            <span>
              <button type='button' className='btn btn-danger'>
                <i className='fa fa-ban' aria-hidden='true' />
                Unpublished
              </button>
              <button type='button' className=' btn-success'>
                <i
                  className='fa fa-check-circle '
                  style={{ color: 'white' }}
                  aria-hidden='true'
                />
                Published
              </button>
            </span>
          </div>
          <br />
          <div className='main_btn'>
            <button>
              <i className='fa fa-file-o' aria-hidden='true' />
              Import Existing Content
            </button>
            <button>Import from Commons</button>
            <button>Choose Home Page</button>
            <button>View Course Stream</button>
            <button>New Announcement</button>
            <button>New Analytics</button>
            <button>View Course Notifications</button>
          </div>
          <br />
          <h5>To Do</h5>
          <hr />
          <h1>Course Status</h1>
          <a href='#'>View Calander</a>
          <ul className='navigation'>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
