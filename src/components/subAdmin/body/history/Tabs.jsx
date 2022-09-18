import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Table from './table_body/Table';
import { useForm } from "react-hook-form";
import icon_filter from '../../../assets/img/icon_filter.svg'
import Table2 from './table_body/Table2';
import { Pending, Recommend, Approved, ToBeRevised, NotRecommend, NotApproved } from '../../../constant/constant';
const Tabs = () => {

    const apcReducer = useSelector(state => state.apcReducer)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();


    // for Filter-1
    const [selectYear, setSelectYear] = useState('')
    const [selectClass, setSelectClass] = useState('')
    const [selectEnroll, setSelectEnroll] = useState('')
    // for Filter-2
    const [selectYear2, setSelectYear2] = useState('')
    const [selectClass2, setSelectClass2] = useState('')
    const [selectEnroll2, setSelectEnroll2] = useState('')

    let allYear = [], allClass = [], allEnroll = []
    let allYear2 = [], allClass2 = [], allEnroll2 = []

    if (apcReducer.apcClass?.length > 0) {
        // For getting all Year of Student
        apcReducer.apcClass.map((data) => {
            // Filter-1
            if (!allYear.includes(data.betch)) {
                allYear.push(data.betch)
            }
            // Filter-2
            if (!allYear2.includes(data.betch)) {
                allYear2.push(data.betch)
            }
        })

        // For GET class form all student data
        // Filter-1
        if (selectYear != '') {
            apcReducer.apcClass.map((data) => {
                // Filter-1
                if (data.betch == selectYear) {
                    if (!allClass.includes(data.name)) {
                        allClass.push(data.name)
                    }
                }
            })
        }
        // Filter-2
        if (selectYear2 != '') {
            apcReducer.apcClass.map((data) => {
                // Filter-2
                if (data.betch == selectYear2) {
                    if (!allClass2.includes(data.name)) {
                        allClass2.push(data.name)
                    }
                }
            })
        }
    }

    if (apcReducer.apcStudent?.length > 0) {
        // For GET Enrooll base on Class and Year 
        // Filter-1
        if (selectYear != '' && selectClass != '') {
            apcReducer.apcStudent.map((data) => {
                // Filter-1
                if (data.class.betch == selectYear && data.class.name == selectClass) {
                    if (!allEnroll.includes(data.enrollmentNo)) {
                        allEnroll.push(data.enrollmentNo)
                    }
                }
            })
        }
        // Filter-2
        if (selectYear2 != '' && selectClass2 != '') {
            apcReducer.apcStudent.map((data) => {
                // Filter-1
                if (data.class.betch == selectYear2 && data.class.name == selectClass2) {
                    if (!allEnroll2.includes(data.enrollmentNo)) {
                        allEnroll2.push(data.enrollmentNo)
                    }
                }
            })
        }

    }

    // Sort all data of all arr
    // Filter-1
    allYear.sort()
    allClass.sort()
    allEnroll.sort()
    // Filter-2
    allYear2.sort()
    allClass2.sort()
    allEnroll2.sort()

    // //console.log(allYear)
    const [filterReq, setFilterReq] = useState("filter1")
    // Filter-1
    const [filter, setFilter] = useState({ status: '', year: '', class: '', enroll: '' })
    const onSubmit = (data) => {
        if (data.year === '' && data.status === '' && data.class === '' && data.enroll === '') {
            // //console.log("requied")
        } else {
            setFilter({ status: data.status, year: selectYear, class: selectClass, enroll: selectEnroll })
            setFilterReq("filter1")
        }
    }

    // Filter-2
    const [filter2, setFilter2] = useState({ min: '', max: '', year2: '', class2: '', enroll2: '' })
    const onSubmit2 = (data) => {

        if (data.year2 === '' && data.class2 === '' && data.enroll2 === '' && data.points2 === '') {
            // //console.log("requied")
        } else {
            setFilter2({ min: data.min, max: data.max, year2: selectYear2, class2: selectClass2, enroll2: selectEnroll2 })
            setFilterReq("filter2")
        }

    }
    const resetSort = () => {
        setFilter({ status: '', year: '', class: '', enroll: '' })
        setFilter2({ min: '', max: '', year2: '', class2: '', enroll2: '' })
        // After Clicking Reset Btn show Filter1 data
        setFilterReq("filter1")
        // for Form Rest
        // Filter-1
        setValue('status', '')
        setValue('year', '')
        setValue('class', '')
        setValue('enroll', '')
        // Filter-2
        setValue('min', '')
        setValue('max', '')
        setValue('year1', '')
        setValue('class1', '')
        setValue('enroll1', '')
        document.getElementById('apc_master_filter').reset()
        document.getElementById('apc_master_filter2').reset()
        // State Reset
        setSelectYear('')
        setSelectClass('')
        setSelectEnroll('')

        setSelectYear2('')
        setSelectClass2('')
        setSelectEnroll2('')
    }


    const [toggle, setToggle] = useState(null);
    let handleToggle = (id) => {
        if (toggle === id) {

            setToggle(null);
            return false
        }
        setToggle(id)
        resetSort()
    }

    return (
        <>
            <div className='row ml-3'>
                <button className=' mr-3 btn btn-sm submit-btn' onClick={() => handleToggle("collapseFilter1")} >
                    <img src={icon_filter} className='img-fluid' alt='ppsu' /> Activity</button>

                <button className=' mr-3 btn btn-sm submit-btn' onClick={() => handleToggle("collapseFilter2")}>
                    <img src={icon_filter} className='img-fluid' alt='ppsu' /> Points</button>

                <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
            </div>

            <div className="block_tabs" id="collapseFilter1">
                {
                    ("collapseFilter1" === toggle)
                        ? <>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <form onSubmit={handleSubmit(onSubmit)} id='apc_master_filter'>
                                    <div className='row pt-3 pl-3 pr-3'>

                                        <div className='mt-2 mr-4'>
                                            <select className="filter_select_menu"
                                                style={{ cursor: 'pointer' }}
                                                {...register("status")}
                                            >
                                                <option defaultValue value="">Status</option>
                                                <option value={Pending}>Pending</option>
                                                <option value={Recommend}>Recommend</option>
                                                <option value={NotRecommend}>Not Recommend</option>
                                                <option value={Approved}>Approved</option>
                                                <option value={NotApproved}>Not Approved</option>
                                                <option value={ToBeRevised}>To be Revised</option>
                                            </select>
                                        </div>

                                        <div className='mt-2 mr-4'>
                                            <select className="filter_select_menu"
                                                style={{ cursor: 'pointer' }}
                                                {...register("year")}
                                                onChange={e => setSelectYear(e.target.value)}
                                            >
                                                <option defaultValue value="">Year</option>
                                                {
                                                    allYear.map((data, index) => {
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
                                                {...register("class")}
                                                onChange={e => setSelectClass(e.target.value)}
                                            >
                                                <option defaultValue value="">Class</option>
                                                {
                                                    allClass.map((data, index) => {
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
                                                {...register("enroll")}
                                                onChange={e => setSelectEnroll(e.target.value)}
                                            >
                                                <option defaultValue value="">En. Number</option>
                                                {
                                                    allEnroll.map((data, index) => {
                                                        return (
                                                            <option value={data} key={index}>{data}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className='mt-2 mr-4'>
                                            <button className='btn btn-sm filter_apply_btn' type='submit'>Apply</button>
                                            {/* <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button> */}
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </>
                        : ''
                }

            </div>

            <div className="block_tabs" id="collapseFilter2">
                {
                    ("collapseFilter2" === toggle)
                        ? <>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <form onSubmit={handleSubmit(onSubmit2)} id='apc_master_filter2'>
                                    <div className='row pt-3 pl-3 pr-3'>

                                        <div className='mt-2 mr-4'>
                                            {/* <select className="filter_select_menu"
                                    style={{ cursor: 'pointer' }}
                                    {...register("points2")}
                                >
                                    <option defaultValue value="">Points</option>
                                    <option value="0to20">0-20</option>
                                    <option value="21to50">21-50</option>
                                    <option value="51to70">51-70</option>
                                    <option value="71to90">71-90</option>
                                    <option value="91to100">91-100</option>
                                </select> */}

                                            <input type="number" name="min"  {...register("min")} placeholder="min" min="0" max="100" className="mr-4" />
                                            <input type="number" name="max"  {...register("max")} placeholder="max" min="0" max="100" />
                                        </div>

                                        <div className='mt-2 mr-4'>
                                            <select className="filter_select_menu"
                                                style={{ cursor: 'pointer' }}
                                                {...register("year2")}
                                                onChange={e => setSelectYear2(e.target.value)}
                                            >
                                                <option defaultValue value="">Year</option>
                                                {
                                                    allYear2.map((data, index) => {
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
                                                {...register("class2")}
                                                onChange={e => setSelectClass2(e.target.value)}
                                            >
                                                <option defaultValue value="">Class</option>
                                                {
                                                    allClass2.map((data, index) => {
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
                                                {...register("enroll2")}
                                                onChange={e => setSelectEnroll2(e.target.value)}
                                            >
                                                <option defaultValue value="">En. Number</option>
                                                {
                                                    allEnroll2.map((data, index) => {
                                                        return (
                                                            <option value={data} key={index}>{data}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>


                                        <div className='mt-2 mr-4'>
                                            <button className='btn btn-sm filter_apply_btn' type='submit'>Apply</button>
                                            {/* <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button> */}
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </>
                        : ''
                }

            </div>


            <div className="content-tabs mt-4">

                <div className="content  active-content">
                    {
                        filterReq === "filter1"
                            ? <Table data={filter} />
                            : filterReq === "filter2"
                                ? <Table2 data={filter2} />
                                : "Opps! Somthing Went Wrong."
                    }
                </div>

            </div>
        </>
    )
}
export default Tabs