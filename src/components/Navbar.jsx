import { useState } from 'react';
import './assets/css/style.css';
import { NavLink, Link } from 'react-router-dom'
import ppsuLogo from './assets/img/ppsu_logo.png'
import loader_ppsuLogo from './assets/img/loader_ppsu_logo.png'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS, REQ_FOR_GET_HEADING_PROGRESS } from '../redux/student/action/action';
import { REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS } from '../redux/faculty/action/action';
import { base_url } from '../redux/constant';
import { REQ_FOR_GET_CLASS_PROGRESS, REQ_FOR_GET_CC_PROGRESS, REQ_FOR_GET_ALL_STUDENT_PROGRESS, REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS } from '../redux/subAdmin/action/action';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { REQ_FOR_GET_DEAN_PROGRESS, REQ_FOR_GET_HEADING_PROGRESS_COE, REQ_FOR_GET_SCHOOL_PROGRESS } from '../redux/coe/action/action';
import { REQ_FOR_GET_ACTIVITY_PROGRESS, REQ_FOR_GET_APC_PROGRESS, REQ_FOR_GET_CLASS_CONST_PROGRESS, REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS } from '../redux/admin/action/action';

const Navbar = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    // For Student 
    const studentReducer = useSelector(state => state.studentReducer)
    // For Faculty
    const facultyReducer = useSelector(state => state.facultyReducer)
    // For apc
    const apcReducer = useSelector(state => state.apcReducer)
    // //console.log(apcReducer.apcProfile.school._id)
    // InstAdmin
    const instadmin = useSelector(state => state.instAdminReducer)

    // Logout
    const logout = () => {
        axios.get(base_url + "/logout", {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }).then((res) => {
            if (res.status === 200) {
                window.location = "/"
                Cookies.remove('connect.sid')
                Cookies.remove('role')
                Cookies.remove('isAuth')
            }
        })
    }

    useEffect(() => {
        // Student
        if (props.data.role === 'student') {
            // //console.log("call Student")
            dispatch({ type: REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS, payload: `${studentReducer.studentProfile._id}` })
            // This is for get All heading By SCHOOL
            dispatch({ type: REQ_FOR_GET_HEADING_PROGRESS, payload: `${studentReducer.studentProfile.school._id}` })
            dispatch({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, payload: `${studentReducer.studentProfile.school._id}` })
            // dispatch({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, payload: `${studentReducer.studentProfile.school._id}` })
        }
        // Faculty
        if (props.data.role === 'faculty') {
            // //console.log("call Faculty")
            // //console.log(facultyReducer)
            dispatch({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, payload: `${facultyReducer.facultyProfile.school._id}` })
            if (facultyReducer.facultyProfile?.class.length !== 0) {
                // dispatch({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS, payload: `${facultyReducer.facultyProfile.class[0]._id}` })
                // dispatch({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS, payload: `${location.pathname.split('/')[2]}` })
                if (location.pathname.split('/')[2] !== '') {
                    dispatch({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS, payload: `${location.pathname.split('/')[2]}` })
                }
            }
        }
        // APC (Subadmin)
        if (props.data.role === 'apc') {
            // //console.log("call APC")
            dispatch({ type: REQ_FOR_GET_CC_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })
            dispatch({ type: REQ_FOR_GET_ALL_STUDENT_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })
            dispatch({ type: REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })
            dispatch({ type: REQ_FOR_GET_CLASS_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })

            dispatch({ type: REQ_FOR_GET_CLASS_CONST_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })
            dispatch({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, payload: `${apcReducer.apcProfile.school._id}` })
        }
        // COE (coe)
        if (props.data.role === 'coe') {
            // //console.log("call COE")
            dispatch({ type: REQ_FOR_GET_SCHOOL_PROGRESS })
            dispatch({ type: REQ_FOR_GET_DEAN_PROGRESS })
            // This is for GET All heading
            dispatch({ type: REQ_FOR_GET_HEADING_PROGRESS_COE })
        }
        // INSTADMIN (Admin)
        if (props.data.role === 'admin') {

            dispatch({ type: REQ_FOR_GET_APC_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })

            dispatch({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
            dispatch({ type: REQ_FOR_GET_ACTIVITY_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })

            // dispatch({ type: REQ_FOR_GET_CLASS_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })

            dispatch({ type: REQ_FOR_GET_ALL_STUDENT_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
            dispatch({ type: REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
            dispatch({ type: REQ_FOR_GET_CLASS_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
            dispatch({ type: REQ_FOR_GET_CC_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
            // This is for GET All heading
            dispatch({ type: REQ_FOR_GET_HEADING_PROGRESS_COE })

            dispatch({ type: REQ_FOR_GET_CLASS_CONST_PROGRESS, payload: `${instadmin.adminProfile?.school._id}` })
        }
    }, [dispatch])



    const [show, setShow] = useState(false)

    const NavData_ = (data) => {
        switch (data.role) {
            case 'student':
                return data.studentNavData.map((data, index) => {
                    return (
                        <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                            <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                            <span className="nav__name">{data.label}</span>
                        </NavLink>
                    )
                })
                break;
            case 'faculty':
                return data.facultyNavData.map((data, index) => {
                    return (
                        <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                            <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                            <span className="nav__name">{data.label}</span>
                        </NavLink>
                    )
                })
                break;
            case 'apc':
                return data.subAdminNavData.map((data, index) => {
                    return <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                        <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                        <span className="nav__name">{data.label}</span>
                    </NavLink>
                })
                break;
            case 'admin':
                return data.adminNavData.map((data, index) => {
                    return (
                        <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                            <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                            <span className="nav__name">{data.label}</span>
                        </NavLink>
                    )
                })
                break
            case 'coe':
                return data.masterNavData.map((data, index) => {
                    return (
                        <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                            <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                            <span className="nav__name">{data.label}</span>
                        </NavLink>
                    )
                })
                break;
            default:
                return null
        }
    }

    return (
        <>
            <div className='hpad'>
                <section id="body-pd" className={show ? 'body-pd' : null}>
                    <header className={`header ${show ? 'body-pd' : null}`} id="header">
                        <div className="header__toggle">
                            <i className={`bx bx-menu ${show ? 'bx-x' : null}`} id="header-toggle" onClick={() => {
                                setShow(!show)
                            }}></i>
                        </div>
                    </header>
                    <div className={`l-navbar show_des ${show ? 'show' : null}`} id="nav-bar">
                        <nav className="nav">
                            <div>
                                <div className="nav__link" style={{ textDecoration: 'none' }} >
                                    {/* Small and second Full*/}
                                    {
                                        show
                                            ? <span className="nav__icon"><img src={loader_ppsuLogo} alt="ppsu" width={25} /></span>
                                            : <span className="nav__logo-name"><img src={ppsuLogo} alt="ppsu" width={120} /></span>
                                    }
                                </div>
                                <div className="nav__list">
                                    {
                                        NavData_(props.data)
                                    }
                                </div>
                            </div>
                            <Link to='#' className="nav__link" style={{ textDecoration: 'none' }} onClick={logout}>
                                <i className='bx bx-log-out nav__icon' ></i>
                                <span className="nav__name">Log Out</span>
                            </Link>
                        </nav>
                    </div>
                </section>
            </div >
        </>
    )

}

export default Navbar

{
    {/* NavData_(props.data) */ }
    {/* props.data.subAdminNavData.map((data, index) => {

        return (
            <NavLink to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                <i className={`nav__icon bx ${data.icon}`} style={{ marginTop: '1.5px' }}></i>
                <span className="nav__name">{data.label}</span>
            </NavLink>
        )
    }) */}
}