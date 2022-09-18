import React, { useState } from 'react'
import Table from './table_body/Table';
import { useForm } from "react-hook-form";

import { useSelector } from 'react-redux'
import { Pending, Recommend, Approved, ToBeRevised, NotRecommend, NotApproved } from '../../../constant/constant';
const Tabs = () => {
    const apcReducer = useSelector(state => state.apcReducer)

    const [selectyear, setSelectyear] = useState('')
    const [selectclass, setSelectclass] = useState('')
    const [selectenroll, setSelectenroll] = useState('')



    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };



    const data = ['Work Pending']

    const [filter, setFilter] = useState({ data_tabs: Recommend })
    const onSubmit = (e) => {
        e.preventDefault()
        if (selectyear !== '' || selectclass !== '' || selectenroll !== '') {
            setFilter({ data_tabs: Recommend, year: selectyear, class: selectclass, enroll: selectenroll })
        }
    }
    const resetSort = () => {
        setFilter({ data_tabs: Recommend })
        // CAlled for chnage forcefully chnage state
        setSelectyear('')
        setSelectclass('')
        setSelectenroll('')

        document.getElementById("filter_form_apc_activity").reset()
    }

    // STore enrollment number and name
    let studentYear = []

    let studentClassName = []
    let studentEnrollemnt = []
    // For getting all year for filtering
    apcReducer.apcClass.map((data) => {
        if (!studentYear.includes(data.betch)) {
            studentYear.push(data.betch)
        }
    })
    // For getting all Classname for filtering
    apcReducer.apcClass.map((data) => {
        if (data.betch == selectyear) {
            if (!studentClassName.includes(data.name)) {
                studentClassName.push(data.name)
            }
        }

    })
    // For getting all Enrollment Number for filtering
    apcReducer.apcStudent.map((data) => {
        if (data.class.betch == selectyear && data.class.name == selectclass) {
            if (!studentEnrollemnt.includes(data.enrollmentNo)) {
                studentEnrollemnt.push(data.enrollmentNo)
            }
        }
    })
    studentYear.sort()
    studentClassName.sort()
    studentEnrollemnt.sort()

    return (
        <>
            <div className="block_tabs">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <div className='row'>
                        {
                            data.map((data, index) => {
                                return (
                                    <div className='nav-item' key={index + 1}>
                                        <div
                                            className={toggleState === index + 1 ? "tabs active-tabs nav-link" : "tabs nav-link"}
                                            onClick={() => toggleTab(index + 1)}
                                        >
                                            {data}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="block_tabs">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <form id="filter_form_apc_activity">
                        <div className='row pt-3 pl-3 pr-3'>
                            <div className='mt-2 mr-4'>
                                <select className="filter_select_menu"
                                    style={{ cursor: 'pointer' }}
                                    name="selectYear"
                                    onChange={e => setSelectyear(e.target.value)}
                                >
                                    <option defaultValue value="">Year</option>
                                    {
                                        studentYear.map((data, index) => {
                                            return (
                                                <option value={data} key={index}>{data}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='mt-2 mr-4'>
                                <select className="filter_select_menu"
                                    style={{ cursor: 'pointer' }}
                                    name="selectClass"
                                    onChange={e => setSelectclass(e.target.value)}
                                >
                                    <option defaultValue value="">Class</option>
                                    {
                                        studentClassName.map((data, index) => {
                                            return (
                                                <option value={data} key={index}>{data}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className='mt-2 mr-4'>
                                <select className="filter_select_menu"
                                    style={{ cursor: 'pointer' }}
                                    name="selectEnroll"
                                    onChange={e => setSelectenroll(e.target.value)}
                                >
                                    <option defaultValue value="">En. Number</option>
                                    {
                                        studentEnrollemnt.map((data, index) => {
                                            return (
                                                <option value={data} key={index}>{data}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>

                            <div className='mt-2 mr-4'>
                                <button className='btn btn-sm filter_apply_btn' type='submit' onClick={onSubmit}>Apply</button>
                                <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
                            </div>


                            {/* <div className='ml-auto nav-item '>
                            <button type="button" className="btn btn-sm add_export_btn pl-2 pr-2 mr-2 " data-toggle="modal" data-target="#exampleModal">
                                <span><i class='bx bx-export'></i>  Export Report</span>
                            </button>
                          
                        </div> */}
                        </div>
                    </form>
                </div>
            </div>


            <div className="content-tabs mt-4">

                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <Table data={filter} />
                </div>

            </div>
        </>
    )
}
export default Tabs