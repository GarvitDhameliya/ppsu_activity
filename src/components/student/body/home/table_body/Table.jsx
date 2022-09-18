import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import empty_data from '../../../../assets/img/empty_data.svg'
import { REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS } from '../../../../../redux/student/action/action'
import { Pending, Recommend, Approved, ToBeRevised, NotRecommend, NotApproved } from '../../../../constant/constant'
const Table = (props) => {

    const studentReqReducer = useSelector(state => state.studentReducer)
    let i = 0
    const dispatch = useDispatch()

    const delete_req = (e) => {
        const data = e
        dispatch({ type: REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS, payload: data })
    }


    // if (studentReqReducer.dataIsLoaded === true) {
    return (
        <>
            <div className='table-responsive-sm'>

                <table className="table data-table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Status</th>
                            <th scope="col">Publish Date</th>
                            <th scope="col">Recommend/Approved Date</th>
                            <th scope="col">Earned Point</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            props.data === "all" ?
                                studentReqReducer.studentActivityRequest.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.heading?.categoryId}_{data.heading?.categoryName}</td>
                                            <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                            <td>{data.publishDate.split('T')[0]}</td>
                                            {
                                                data.status === Recommend ?
                                                    <td>
                                                        {data.approvedDate.split('T')[0]}
                                                    </td>
                                                    : data.status === Approved
                                                        ? <td>
                                                            {data.completedDate.split('T')[0]}
                                                        </td>
                                                        : <td>
                                                            -
                                                        </td>
                                            }
                                            {
                                                data.status === Approved ?
                                                    <td>
                                                        10
                                                    </td>
                                                    : <td>
                                                        0
                                                    </td>
                                            }
                                            <td>
                                                {
                                                    data.status === Pending || data.status === ToBeRevised ?
                                                        <Link to={`/view/${data._id}`} >
                                                            <span className='mr-5'>view/edit</span>
                                                        </Link>
                                                        : <Link to={`/view/${data._id}`} >
                                                            <span className='mr-5'>view</span>
                                                        </Link>
                                                }

                                            </td>
                                            <td>
                                                {
                                                    data.status === Pending ?
                                                        <i className='bx bxs-trash text-dark' onClick={() => delete_req(data._id)}></i>
                                                        : <></>
                                                }

                                            </td>
                                            {/* <td>
                                                    <div className='btn-group'>
                                                        <span className='mr-4'><i className='bx bxs-edit-alt'></i></span>
                                                    </div>
                                                </td> */}
                                        </tr>
                                    )
                                })
                                : props.data === Pending ?

                                    studentReqReducer.studentActivityRequest.map((data, index) => {
                                        if (data.status === Pending) {
                                            i++
                                            return (
                                                <tr key={index}>
                                                    <th scope="row" >{i}</th>
                                                    <td>{data.heading?.categoryName}</td>
                                                    <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                    <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                    <td>-</td>
                                                    <td>0</td>
                                                    <td>
                                                        <Link to={`/view/${data._id}`} >
                                                            <span className='mr-5'>view/edit</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {
                                                            data.status === Pending ?
                                                                <i className='bx bxs-trash text-dark' onClick={() => delete_req(data._id)}></i>
                                                                : <></>
                                                        }
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    })
                                    : props.data === ToBeRevised ?
                                        studentReqReducer.studentActivityRequest.map((data, index) => {
                                            if (data.status === ToBeRevised) {
                                                i++
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row" >{i}</th>
                                                        <td>{data.heading?.categoryName}</td>
                                                        <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                        <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                        <td>-</td>
                                                        <td>0</td>
                                                        <td>
                                                            <Link to={`/view/${data._id}`} >
                                                                <span className='mr-5'>view/edit</span>
                                                            </Link>
                                                        </td>
                                                        <td></td>
                                                    </tr>

                                                )
                                            }
                                        }) : props.data === Recommend ?
                                            studentReqReducer.studentActivityRequest.map((data, index) => {
                                                if (data.status === Recommend) {
                                                    i++
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row" >{i}</th>
                                                            <td>{data.heading?.categoryName}</td>
                                                            <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                            <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                            <td>{data.approvedDate.split('T')[0]}</td>
                                                            <td>0</td>
                                                            <td>
                                                                <Link to={`/view/${data._id}`} >
                                                                    <span className='mr-5'>view</span>
                                                                </Link>
                                                            </td>
                                                            <td></td>
                                                        </tr>

                                                    )
                                                }
                                            }) : props.data === Approved ?
                                                studentReqReducer.studentActivityRequest.map((data, index) => {
                                                    if (data.status === Approved) {
                                                        i++
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row" >{i}</th>
                                                                <td>{data.heading?.categoryName}</td>
                                                                <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                                <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                                <td>{data.approvedDate.split('T')[0]}</td>
                                                                <td>10</td>
                                                                <td>
                                                                    <Link to={`/view/${data._id}`} >
                                                                        <span className='mr-5'>view</span>
                                                                    </Link>
                                                                </td>
                                                                <td></td>
                                                            </tr>

                                                        )
                                                    }
                                                }) : props.data === NotRecommend ?
                                                    studentReqReducer.studentActivityRequest.map((data, index) => {
                                                        if (data.status === NotRecommend) {
                                                            i++
                                                            return (
                                                                <tr key={index}>
                                                                    <th scope="row" >{i}</th>
                                                                    <td>{data.heading?.categoryName}</td>
                                                                    <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                                    <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                                    <td>23-07-2022</td>
                                                                    <td>10</td>
                                                                    <td>
                                                                        <Link to={`/view/${data._id}`} >
                                                                            <span className='mr-5'>view</span>
                                                                        </Link>
                                                                    </td>
                                                                    <td></td>
                                                                </tr>

                                                            )
                                                        }
                                                    }) : props.data === NotApproved ?
                                                        studentReqReducer.studentActivityRequest.map((data, index) => {
                                                            if (data.status === NotApproved) {
                                                                i++
                                                                return (
                                                                    <tr key={index}>
                                                                        <th scope="row" >{i}</th>
                                                                        <td>{data.heading?.categoryName}</td>
                                                                        <td><span className={`status_${data.status}`}>{data.status}</span></td>
                                                                        <td>{Date(data.publishDate).split('GMT')[0]}</td>
                                                                        <td>23-07-2022</td>
                                                                        <td>10</td>
                                                                        <td>
                                                                            <Link to={`/view/${data._id}`} >
                                                                                <span className='mr-5'>view</span>
                                                                            </Link>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>

                                                                )
                                                            }
                                                        }) : ""
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
    // } else {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

}
export default Table