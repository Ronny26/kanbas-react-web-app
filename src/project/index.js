import Signin from '../users/signin'
import Signup from '../users/signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Account from "../users/account";
import UserTable from "../users/table";
import Navbar from "../newNav/index"

function Project () {
  return (
    <div className='row'>
      <div className='col-2'></div>
      <div className='col-10'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate to='/project/home' />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  )
}
export default Project
