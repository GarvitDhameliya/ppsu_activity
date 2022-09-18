import React, { useState } from 'react'
import Model from './model/ExportModel';
import '../../assets/css/style.css'
import Table from './table_body/Table';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'
import { Pending, Recommend, Approved, ToBeRevised, NotApproved, NotRecommend } from '../../../constant/constant';
const Tabs = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    const data = ['All', Pending, Recommend, NotRecommend, ToBeRevised]
    const facultyReqReducer = useSelector(state => state.facultyReducer)

    // let sort = { data: "all" }
    const [filter, setFilter] = useState({ data_tabs: "all" })
    const onSubmit = (data) => {
        if (data.selectStatus === '' && data.selectEnNumber === '') {
            // //console.log("Any one Requied")
        } else {
            setFilter({ data_tabs: "all", data })
        }
    }

    const resetSort = () => {
        setFilter({ data_tabs: "all" })
    }


    let studentEnrollemnt = []
    // For getting all Enrollment Number for filtering
    facultyReducer.faciltyActivityReqByClass.map((data) => {
        if (!studentEnrollemnt.includes(data.student.enrollmentNo)) {
            studentEnrollemnt.push(data.student.enrollmentNo)
        }
    })

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
                                            {/* <>
                                                <span className="badge badge-light">9</span>
                                                <span class="sr-only">unread messages</span>
                                            </> */}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>





            <div className="content-tabs mt-4 ">

                <div className={toggleState === 1 ? "content  active-content" : "content"}>

                    {/* Only show when select all Tabs */}
                    {/* Filter Form */}
                    <div className="block_tabs ">
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <div className='row pt-3 pl-3 pr-3'>

                                <form className='row' onSubmit={handleSubmit(onSubmit)}>

                                    <div className='mt-2 mr-4'>
                                        <select className="filter_select_menu"
                                            style={{ cursor: 'pointer' }}
                                            {...register("selectStatus")}
                                        >
                                            <option defaultValue value="">Status</option>
                                            <option value={Pending}>Pending</option>
                                            <option value={Recommend}>Recommend</option>
                                            <option value={NotRecommend}>NotRecommend</option>
                                            <option value={Approved}>Approved</option>
                                            <option value={NotApproved}>Not Approved</option>
                                            <option value={ToBeRevised}>ToBeRevised</option>
                                        </select>
                                    </div>

                                    <div className='mt-2 mr-4'>
                                        <select className="filter_select_menu"
                                            style={{ cursor: 'pointer' }}
                                            {...register("selectEnNumber")}
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
                                        <button className='btn btn-sm filter_apply_btn' type='submit'>Apply</button>
                                        <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    <Table data={filter} />


                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Table data={Pending} />
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <Table data={Recommend} />


                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <Table data={NotRecommend} />

                </div>
                {/* <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >

                    <Table data={Approved} />

                </div>
                <div
                    className={toggleState === 6 ? "content  active-content" : "content"}
                >

                    <Table data={NotApproved} />

                </div> */}
                <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >
                    <Table data={ToBeRevised} />
                </div>
            </div>
        </>
    )
}
export default Tabs












