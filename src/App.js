import './App.css'
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';


// Student
import Home from './components/student/Home';
import StudentNavbar from './components/student/studentNavbar/StudentNavbar';
import Profile from './components/student/Profile';
import View from './components/student/View';

// Faculty
import FacultyNavbar from './components/faculty/facultyNavbar/FacultyNavbar';
import FHome from './components/faculty/Home';
import FProfile from './components/faculty/Profile'
import FView from './components/faculty/View'

// SubAdmin
import SubAdminNavbar from './components/subAdmin/subAdminNavbar/SubAdminNavbar';
import ApcActivity from './components/subAdmin/Activity'
import ApcHistory from './components/subAdmin/History';
import ApcManage from './components/subAdmin/Manage';
import AView from './components/subAdmin/View'
import AProfile from './components/subAdmin/Profile'
import AHelp from './components/subAdmin/Help'

// Admin (instAdmin)
import InstNavabar from './components/admin/adminNavbar/AdminNavbar'
import InstHome from './components/admin/Home'
import InstActivity from './components/admin/Activity'
import InstManage from './components/admin/Manage'
import InstProfile from './components/admin/Profile'
import InstView from './components/admin/View'
import InstHelp from './components/admin/Help'

// Materadmin (COE)
import MasterNavbar from './components/master/masterNavbar/MasterNavbar';
import CoeHome from './components/master/Home'
import Schools from './components/master/Schools';
import SchoolsView from './components/master/SchoolsView';
import COEManage from './components/master/Manage';
import COEProfile from './components/master/Profile'
import COEView from './components/master/body/viewReq/View'
import COEHelp from './components/master/Help'

// Login
import AllLogin from './components/constant/Login/Login'
// Student Login
import Login from './components/student/Login';
// faculty Login
import FacultyLogin from './components/faculty/FacultyLogin';
// Apc Login
import SubAdminLogin from './components/subAdmin/SubAdminLogin';
// Admin
import AdminLogin from './components/admin/AdminLogin';
// COE Login
import CoeLogin from './components/master/CoeLogin';


// Import Search
import Search from './components/constant/search/Search'
// Used for Validation and Toast msg show to user
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// PageNotFound
import PageNotFound from './components/PageNotFound';
import Cookies from 'js-cookie';
import { useState } from 'react';
import SHelp from './components/student/Help';
import Help from './components/faculty/Help';
import Demo from './components/Dome';
import Launch from './components/Launch'
import About from './components/master/About';

function App() {


  axios.defaults.withCredentials = true;
  axios.defaults.corssDomain = true;

  // const [userOnline, setuserOnline] = useState(1)
  // //console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
  // window.addEventListener('online', () => setuserOnline(1));
  // window.addEventListener('offline', () => setuserOnline(0));
  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault()
  //   Cookies.remove('role')
  //   Cookies.remove('isAuth')
  //   Cookies.remove('connect.sid')
  // })

  // if (userOnline === 1) {

  if (!Cookies.get('role') || !Cookies.get('isAuth')) {
    return (
      <>
        {/* <Router> */}
        <Routes>
          <Route path="/" exact element={<AllLogin />} />
          {/* <Route path="/faculty" exact element={<FacultyLogin />} />
          <Route path="/apc" exact element={<SubAdminLogin />} />
          <Route path="/instadmin" exact element={<AdminLogin />} />
          <Route path="/coe" exact element={<CoeLogin />} /> */}
          {/* <Route path='/launch' element={<Launch />} /> */}
          {/* <Route path='/demo' element={<Demo />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
  }
  else if (Cookies.get('role') === "student" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <StudentNavbar />
        <Routes>
          {/* <Route path="/" exact element={<Login />} /> */}
          {/* Student Dashboard Home page*/}
          <Route path='/' exact element={<Home />} />
          {/* Student Profile Page */}
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/view/:id' exact element={<View />} />
          <Route path='/help' exact element={<SHelp />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    );
  }
  else if (Cookies.get('role') === "faculty" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <FacultyNavbar />
        <Routes>
          {/* faculty Dashboard */}
          <Route path='/' exact element={<FHome />} />
          <Route path='/faculty/:id' exact element={<FHome />} />
          <Route path='/help' exact element={<Help />} />
          <Route path='/profile' exact element={<FProfile />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/faculty/:id/view/:id' exact element={<FView />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    );
  }
  else if (Cookies.get('role') === "apc" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <SubAdminNavbar />
        <Routes>
          {/* sub Admin Dashboard */}
          <Route path='/' exact element={<ApcHistory />} />
          <Route path='/search' exact element={<Search />} />
          <Route path='/activity' exact element={<ApcActivity />} />
          <Route path='/history' exact element={<ApcHistory />} />
          <Route path='/governance' exact element={<ApcManage />} />
          <Route path='/apc/view/:id' exact element={<AView />} />
          <Route path='/profile' exact element={<AProfile />} />
          <Route path='/help' exact element={<AHelp />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}

        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
  }
  else if (Cookies.get('role') === "admin" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <InstNavabar />
        <Routes>
          {/* InstAdmin (Admin) Dashboard */}
          <Route path='/' exact element={<InstHome />} />
          <Route path='/search' exact element={<Search />} />
          <Route path='/activity' exact element={<InstActivity />} />
          <Route path='/governance' exact element={<InstManage />} />
          <Route path='/profile' exact element={<InstProfile />} />
          <Route path='/help' exact element={<InstHelp />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/instadmin/view/:id' exact element={<InstView />} />
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}


        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    )
  }
  else if (Cookies.get('role') === "coe" && Cookies.get('isAuth') === "true") {
    return (
      <>
        {/* <Router> */}
        <MasterNavbar />
        <Routes>
          {/* InstAdmin (Admin) Dashboard */}
          <Route path='/' exact element={<CoeHome />} />
          <Route path='/search' exact element={<Search />} />
          <Route path='/schools' exact element={<Schools />} />
          <Route path='/help' exact element={<COEHelp />} />
          <Route path='/schools/:id' exact element={<SchoolsView />} />
          <Route path='/governance' exact element={<COEManage />} />
          <Route path='/coe/view/:id' exact element={<COEView />} />
          <Route path='/profile' exact element={<COEProfile />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' exact element={<PageNotFound />} />

        </Routes>
        {/* </Router> */}


        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </>
    )
  }
  else {
    return (
      <>
        {/* <Router> */}
        <Routes>
          <Route path='*' exact element={<PageNotFound />} />
        </Routes>
        {/* </Router> */}
      </>
    )
  }

  // }
  // // If not Online
  // else {
  //   return (
  //     <>
  //       <div className='noInternet'>
  //         no Internet
  //       </div>
  //     </>
  //   )
  // }

}

export default App;
