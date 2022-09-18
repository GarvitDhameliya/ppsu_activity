import Table from "../table/Table"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import icon_filter from '../../../../assets/img/icon_filter.svg'
import Table2 from "../table/Table2";
import Table3 from "../table/Table3";
import { Pending, Recommend, Approved, ToBeRevised, NotRecommend, NotApproved } from "../../../../constant/constant";
const ActivityData = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    // for Filter-1
    const [selectYear, setSelectYear] = useState('')
    const [selectClass, setSelectClass] = useState('')
    const [selectEnroll, setSelectEnroll] = useState('')

    let allYear = [], allClass = [], allEnroll = []


    // for Filter-2
    const [selectYear2, setSelectYear2] = useState('')
    const [selectClass2, setSelectClass2] = useState('')
    const [selectEnroll2, setSelectEnroll2] = useState('')

    let allYear2 = [], allClass2 = [], allEnroll2 = []


    // Filter -3
    const [selectActivity, setSelectActivity] = useState('')
    let allSelectedActivity = []

    // For getting all Year of Student
    if (apcReducer.apcClass?.length > 0) {
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

        // For GET class form APCClass Reducer
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

    instAdminReducer.selectedActivity.map((data) => {
        if (data.status == 'enable' && data.isApproved == 'Approved') {
            allSelectedActivity.push(data)
        }
    })


    // Sort all data of all arr
    // Filter-1
    allYear.sort()
    allClass.sort()
    allEnroll.sort()
    // Filter-2
    allYear2.sort()
    allClass2.sort()
    allEnroll2.sort()


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
    // // Filter-2
    // const [filter2, setFilter2] = useState({ points2: '', year2: '', class2: '', enroll2: '' })
    // const onSubmit2 = (data) => {

    //     if (data.year2 === '' && data.class2 === '' && data.enroll2 === '' && data.points2 === '') {
    //         //console.log("requied")
    //     } else {
    //         setFilter2({ points2: data.points2, year2: selectYear2, class2: selectClass2, enroll2: selectEnroll2 })
    //         setFilterReq("filter2")
    //     }

    // }


    // Filter-2
    const [filter2, setFilter2] = useState({ max: '', min: '', year2: '', class2: '', enroll2: '' })
    const onSubmit2 = (data) => {
        // //console.log(data.min)

        if (data.year2 === '' && data.class2 === '' && data.enroll2 === '' && data.max === '' && data.min === '') {
            // //console.log("requied")
        } else {
            setFilter2({ min: data.min, max: data.max, year2: selectYear2, class2: selectClass2, enroll2: selectEnroll2 })
            setFilterReq("filter2")
        }

    }


    // Filter-3
    const [filter3, setFilter3] = useState({ category: '' })
    const onSubmit3 = (data) => {

        if (data.category === '') {
            // //console.log("requied")
        } else {
            setFilter3({ category: data.category })
            setFilterReq("filter3")
        }

    }

    const resetSort = () => {
        setFilterReq("filter1")
        // After Clicking Reset Btn show Filter1 data
        // for Form Reset

        // Filter-1
        setFilter({ status: '', year: '', class: '', enroll: '' })
        setValue('status', '')
        setValue('year', '')
        setValue('class', '')
        setValue('enroll', '')
        document.getElementById('instAdmin_master_filter').reset()
        // State Reset
        setSelectYear('')
        setSelectClass('')
        setSelectEnroll('')


        // Filter-2
        setFilter2({ min: '', max: '', year2: '', class2: '', enroll2: '' })
        setValue('min', '')
        setValue('max', '')
        setValue('year1', '')
        setValue('class1', '')
        setValue('enroll1', '')
        document.getElementById('instAdmin_master_filter2').reset()
        // State Reset
        setSelectYear2('')
        setSelectClass2('')
        setSelectEnroll2('')

        // Filter-3
        setFilter3({ category: '' })
        setValue('category', '')
        document.getElementById('instAdmin_master_filter3').reset()

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
                <button className=' mr-3 btn btn-sm submit-btn' onClick={() => handleToggle("collapseFilter1")}>
                    <img src={icon_filter} className='img-fluid' alt='ppsu' /> Status</button>

                <button className=' mr-3 btn btn-sm submit-btn' onClick={() => handleToggle("collapseFilter2")}>
                    <img src={icon_filter} className='img-fluid' alt='ppsu' /> Points</button>

                <button className=' mr-3 btn btn-sm submit-btn' onClick={() => handleToggle("collapseFilter3")}>
                    <img src={icon_filter} className='img-fluid' alt='ppsu' /> Activity Name</button>

                <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
            </div>


            {/* Filter 1 */}
            <div className="block_tabs" id="collapseFilter1">
                {
                    ("collapseFilter1" === toggle)
                        ? <>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <form onSubmit={handleSubmit(onSubmit)} id='instAdmin_master_filter'>
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
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </>
                        : ''
                }
            </div>


            {/* Filter 2 collapseFilter2 */}

            <div className="block_tabs pl-1" id="collapseFilter2">

                {
                    ("collapseFilter2" === toggle)
                        ? <>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <form onSubmit={handleSubmit(onSubmit2)} id='instAdmin_master_filter2'>
                                    <div className='row pt-3 pl-3 pr-3'>

                                        <div className='mt-2 mr-4'>
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


            {/* Filter 3 */}
            <div className="block_tabs" id="collapseFilter3">

                {
                    ("collapseFilter3" === toggle)
                        ? <>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <form onSubmit={handleSubmit(onSubmit3)} id='instAdmin_master_filter3'>
                                    <div className='row pt-3 pl-3 pr-3'>

                                        <div className='mt-2 mr-4'>
                                            <select className="filter_select_menu"
                                                style={{ cursor: 'pointer' }}
                                                {...register("category")}
                                            >
                                                <option defaultValue value="">Select Activity Name</option>
                                                {
                                                    allSelectedActivity.map((data, index) => {
                                                        return (
                                                            <option value={data._id} key={index}>{data.categoryId}__{data.categoryName}</option>
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
                                : filterReq === "filter3"
                                    ? <Table3 data={filter3} />
                                    : "Opps! Somthing Went Wrong."
                    }
                </div>
            </div>
        </>
    )
}
export default ActivityData