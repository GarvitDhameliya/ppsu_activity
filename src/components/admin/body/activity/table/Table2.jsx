import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import ExportModal from '../exportModal/ExportModal'
const Table2 = (props) => {

    // //console.log(props, "this is props")
    const apcReducer = useSelector(state => state.apcReducer)

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'hidden',
                textAlign: 'center',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    let data, data_arr = [], format

    // Point
    if (props.data.min != '' && props.data.max != '' && props.data.year2 == '' && props.data.class2 == '' && props.data.enroll2 == '') {
        if (apcReducer.apcStudent.length > 0) {
            data_arr = []

            apcReducer.apcStudent.map((data) => {
                // //console.log(props.data.min < data.totalPoint < props.data.max)

                if (data.totalPoint >= props.data.min && data.totalPoint <= props.data.max && props.data.max <= 100) {
                    data_arr.push(data)
                }
            })

            // //console.log(data_arr)
            data = data_arr
            format = `All Request by Points ${props.data.min} to ${props.data.max}`

            // // 0 to 20
            // if (props.data.points2 == '0to20') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint <= 20) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points 0 to 20"
            // }
            // // 21 to 50
            // else if (props.data.points2 == '21to50') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint > 20 && data.totalPoint <= 50) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points 21 to 50"
            // }
            // // 50
            // else if (props.data.points2 == '50') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint == 50) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points of 50"
            // }
            // // 51 to 70
            // else if (props.data.points2 == '51to70') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint > 50 && data.totalPoint <= 70) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points 51 to 70"
            // }
            // // 71 to 90
            // else if (props.data.points2 == '71to90') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint > 70 && data.totalPoint <= 90) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points 71 to 90"
            // }
            // // 91 to 100
            // else if (props.data.points2 == '91to100') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint > 90 && data.totalPoint <= 100) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points 91 to 100"
            // }
            // // 100
            // else if (props.data.points2 == '100') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint == 100) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Points of 100"
            // }
        }
    }


    // Year
    else if (props.data.min == '' && props.data.max == '' && props.data.year2 != '' && props.data.class2 == '' && props.data.enroll2 == '') {
        if (apcReducer.apcStudent.length > 0) {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == props.data.year2) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Student by Joining Year"
        }
    }
    // Year and Class
    else if (props.data.min == '' && props.data.max == '' && props.data.year2 != '' && props.data.class2 != '' && props.data.enroll2 == '') {
        if (apcReducer.apcStudent.length > 0) {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Student by Year and Class"
        }
    }
    // Year and Class and enrollment
    else if (props.data.min == '' && props.data.max == '' && props.data.year2 != '' && props.data.class2 != '' && props.data.enroll2 != '') {
        if (apcReducer.apcStudent.length > 0) {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == props.data.year2 && data.class.name == props.data.class2 && data.enrollmentNo == props.data.enroll2) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Student by Year, Class and Enrollment Number"
        }
    }
    // Point and Year
    else if (props.data.min != '' && props.data.max != '' && props.data.year2 != '' && props.data.class2 == '' && props.data.enroll2 == '') {
        data_arr = []

        if (apcReducer.apcStudent.length > 0) {
            data_arr = []

            apcReducer.apcStudent.map((data) => {
                if (data.totalPoint >= props.data.min && data.totalPoint <= props.data.max && data.class.betch == props.data.year2) {
                    // //console.log(data)
                    data_arr.push(data)
                }
            })


            data = data_arr
            format = `All Request by Points ${props.data.min} to ${props.data.max}`
        }
        //     // 0 to 20
        //     if (props.data.points2 == '0to20') {
        //         apcReducer.apcStudent.map((data) => {
        //             if (data.totalPoint <= 20 && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points (0 to 20)"
        //     }
        //     // 21 to 50
        //     else if (props.data.points2 == '21to50') {
        //         apcReducer.apcStudent.map((data) => {
        //             if ((data.totalPoint > 20 && data.totalPoint <= 50) && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points (21 to 50)"
        //     }
        //     // 50
        //     else if (props.data.points2 == '50') {
        //         apcReducer.apcStudent.map((data) => {
        //             if (data.totalPoint == 50 && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points of 50"
        //     }
        //     // 51 to 70
        //     else if (props.data.points2 == '51to70') {
        //         apcReducer.apcStudent.map((data) => {
        //             if ((data.totalPoint > 50 && data.totalPoint <= 70) && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points (51 to 70)"
        //     }
        //     // 71 to 90
        //     else if (props.data.points2 == '71to90') {
        //         apcReducer.apcStudent.map((data) => {
        //             if ((data.totalPoint > 70 && data.totalPoint <= 90) && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points (71 to 90)"
        //     }
        //     // 91 to 100
        //     else if (props.data.points2 == '91to100') {
        //         apcReducer.apcStudent.map((data) => {
        //             if ((data.totalPoint > 90 && data.totalPoint <= 100) && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points (91 to 100)"
        //     }
        //     // 100
        //     else if (props.data.points2 == '100') {
        //         apcReducer.apcStudent.map((data) => {
        //             if (data.totalPoint == 100 && data.class.betch == props.data.year2) {
        //                 data_arr.push(data)
        //             }
        //         })
        //         data = data_arr
        //         format = "All Request by Year and Points of 100"
        //     }
    }


    // Point and Year and Class
    else if (props.data.min != '' && props.data.max != '' && props.data.year2 != '' && props.data.class2 != '' && props.data.enroll2 == '') {
        data_arr = []


        if (apcReducer.apcStudent.length > 0) {
            data_arr = []

            apcReducer.apcStudent.map((data) => {

                if (data.totalPoint >= props.data.min && data.totalPoint <= props.data.max && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
                    // //console.log(data)
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = `All Request by Points ${props.data.min} to ${props.data.max}`

            // // 0 to 20
            // if (props.data.points2 == '0to20') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint <= 20 && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points (0 to 20)"
            // }
            // // 21 to 50
            // else if (props.data.points2 == '21to50') {
            //     apcReducer.apcStudent.map((data) => {
            //         if ((data.totalPoint > 20 && data.totalPoint <= 50) && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points (21 to 50)"
            // }
            // // 50
            // else if (props.data.points2 == '50') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint == 50 && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points of 50"
            // }
            // // 51 to 70
            // else if (props.data.points2 == '51to70') {
            //     apcReducer.apcStudent.map((data) => {
            //         if ((data.totalPoint > 50 && data.totalPoint <= 70) && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points (51 to 70)"
            // }
            // // 71 to 90
            // else if (props.data.points2 == '71to90') {
            //     apcReducer.apcStudent.map((data) => {
            //         if ((data.totalPoint > 70 && data.totalPoint <= 90) && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points (71 to 90)"
            // }
            // // 91 to 100
            // else if (props.data.points2 == '91to100') {
            //     apcReducer.apcStudent.map((data) => {
            //         if ((data.totalPoint > 90 && data.totalPoint <= 100) && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points (91 to 100)"
            // }
            // // 100
            // else if (props.data.points2 == '100') {
            //     apcReducer.apcStudent.map((data) => {
            //         if (data.totalPoint == 100 && data.class.betch == props.data.year2 && data.class.name == props.data.class2) {
            //             data_arr.push(data)
            //         }
            //     })
            //     data = data_arr
            //     format = "All Request by Year,Class and Points of 100"
            // }
        }
    }



    const data_column = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'Batch',
            selector: row => row.class?.betch,
            width: '8rem'
        },
        {
            name: 'Class',
            selector: row => row.class?.name,
            width: '8rem'
        },
        {
            name: 'En. Number',
            selector: row => row?.enrollmentNo,
            sortable: true,
            width: '10rem'
        },
        {
            name: 'Name',
            selector: row => row?.name,
            width: '13rem'
        },
        {
            name: 'Total Points',
            selector: row => row?.totalPoint,
            sortable: true,
            width: '10rem'
        },

        {
            name: 'No. of Request',
            selector: row => row.requests?.length,
            width: '10rem'
        },
    ];

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.name}</div><br />
        <div><strong>Total Points</strong> :  {data.totalPoint}</div>
        <div><strong>Class</strong> :  {data.class.name}</div>
        <div><strong>Batch</strong> :  {data.class.betch}</div>
        <div><strong>No. of Request</strong> :  {data.requests.length}</div>
    </div>;

    const handleSort = (column, direction) => (column.selector, direction);

    return (
        <>
            <div className='row'>
                <button className='btn btn-sm ml-auto' data-toggle="modal" data-target="#exportReport">Export</button>
            </div>
            <ExportModal data={[data, format, { role: 'filter2' }]} />
            <div className='mt-2 ml-3'>
                {
                    <DataTable
                        columns={data_column}
                        data={data}
                        pagination
                        customStyles={customStyles}
                        expandableRows expandableRowsComponent={ExpandedComponent}
                        onSort={handleSort}
                    />
                }
            </div>
        </>
    )

}
export default Table2