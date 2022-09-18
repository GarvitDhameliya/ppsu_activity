import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "../constant";
import { base_url } from '../../../redux/constant'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import SearchModal from "./SearchModal";

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import HeaderPDFFormate from '../../assets/img/PDF/pdfFormat.png'
import FooterPDFFormate from '../../assets/img/PDF/SignLine.png'
import noData from '../../assets/img/noData.svg'

const Search = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [loader, setLoader] = useState(false)
    const [search, setSearch] = useState(false)
    const [data, setData] = useState({})
    const [studentData, setStudentData] = useState({})
    const onSubmit = (data) => {
        setLoader(true)
        axios.get(base_url + '/student/getStudentbyen/' + data.search)
            .then((res) => {
                setLoader(false)
                if (res.status === 200) {
                    setSearch(true)
                    setStudentData(res.data.message)
                }
            })
            .catch((err) => {
                // //console.log(err)
            })
    }
    // //console.log(studentData)
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
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    const columns = [
        {
            name: 'Sr.No',
            cell: (row, index) => index + 1,
            width: '4rem'
        },
        {
            name: 'Activity Name',
            selector: row => <div>{row.heading?.categoryId}_{row.heading?.categoryName}</div>,
            width: '20rem'
        },
        {
            name: 'Status',
            selector: row => <div className={`status_${row.status}`}>{row.status}</div>,
            width: '10rem'
        },
        {
            name: '',
            selector: row => <span className="view_btn_search" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={() => setData(row)}>view</span>,
            width: '4rem'
        },
    ];

    const paginationOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
    };




    const exportpdf = () => {

        let doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: [595, 842]
        })

        let report_data = []

        studentData.requests?.map((data, ind) => {
            report_data.push([ind + 1, `${data.heading.categoryId}_${data.heading.categoryName}`, data.status, data?.publishDate.split('T')[0], data?.completedDate?.split('T')[0]])
        })
        const imageHeight = 110
        doc.setFontSize(11);

        // --------------HEader--------------
        var header = function () {
            doc.addImage(HeaderPDFFormate, "PNG", 40, 10, 520, imageHeight)
            doc.text(`Name: ${studentData.name}`, 40, imageHeight + 40)
            doc.text(`Enrollment No: ${studentData.enrollmentNo}`, 40, imageHeight + 60)
            doc.text(`School: ${studentData.school.name}`, 40, imageHeight + 80)
            doc.text(`Class: ${studentData.class.name}`, 40, imageHeight + 100)
            doc.text(`Year: ${studentData.class.betch}`, 40, imageHeight + 120)
            doc.text('Page ' + (doc.internal.pages.length - 1), 520, imageHeight + 710);
        };

        autoTable(doc, {
            didDrawPage: header,
            margin:
            {
                top: imageHeight + 140
            },
            showHead: 'everyPage',
            head: [['index', 'Activity Name', 'Status', 'Publish Date', 'Completed Date']],
            body: report_data
        })

        // ------------ Footer --------
        // Name of PDF
        doc.save(`report_${studentData.enrollmentNo}.pdf`)
    }



    return (
        <>
            <div className="container main_container mt-5">
                <div className="row justify-content-center">
                    <div className="box">
                        <div className="search-box">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Enrollment Number... ex: 19SE02CE009"
                                    {
                                    ...register("search", {
                                        required: true,
                                        pattern: /^[A-Z0-9]*$/
                                    })
                                    }
                                />
                                {
                                    loader === false
                                        ? <button type="submit" className="icon">
                                            <i className="bx bx-search"></i>
                                        </button>
                                        : <button className="icon" disabled>
                                            <i className="bx bx-search"></i>
                                        </button>
                                }
                            </form>
                        </div>
                        <span className="text-danger ml-3">{errors.search?.type === 'required' && "Enrollment Number is required!"}</span>
                        <span className="text-danger">{errors.search?.type === 'pattern' && "You are permitted to input only uppercase or 0-9 in a row!"}</span>
                    </div>
                </div>

                {
                    loader === true
                        ? Loader()
                        : search === true
                            ? studentData !== null
                                ? <div className="row mt-4 search_container mb-5">
                                    <div className="col-12">
                                        <div className="card instadmin_home_card">
                                            <div className="row pl-5 pr-5 pt-5">
                                                <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
                                                    <h5>Personal details</h5>

                                                    <div className='mb-4 mt-5 '>
                                                        <label>Enrollment No</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={studentData?.enrollmentNo}
                                                            disabled
                                                        />
                                                    </div>

                                                    <div className='mb-4 mt-3 '>
                                                        <label>Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={studentData?.name}
                                                            disabled
                                                        />
                                                    </div>

                                                    <div className='mb-4 mt-3 '>
                                                        <label>Gender</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={studentData?.gender}
                                                            disabled
                                                        />
                                                    </div>

                                                    {/* <div className='mb-5 mt-3 '>
                                                        <label>Cast</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={studentData?.cast}
                                                            disabled
                                                        />
                                                    </div> */}

                                                    <h5 className="mt-5">Academic details</h5>

                                                    <div className='mb-4 mt-4 '>
                                                        <label>School</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={studentData?.school?.name}
                                                            disabled
                                                        />
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className='mb-4 mt-3 '>
                                                                <label>Class</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={studentData?.class?.name}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className='mb-4 mt-3 '>
                                                                <label>Year</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={studentData?.class?.betch}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-12 pl-lg-5 pl-md-5">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <h5>Activity</h5>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                                                            <span>Total Points: <b>{studentData?.totalPoint}</b></span>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12 justify-content-end d-flex">
                                                            <button type="button" className="btn btn-sm add_export_btn pl-2 pr-2 mr-md-2 mr-lg-2 " onClick={exportpdf}>
                                                                <span><i className='bx bx-export'></i> Export Report</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <DataTable
                                                            columns={columns}
                                                            data={studentData?.requests}
                                                            pagination
                                                            paginationComponentOptions={paginationOptions}
                                                            customStyles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                : <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4 text-center">
                                        <img src={noData} className="img-fluid noData_img" />
                                        <br />
                                        <div className="mt-5">No Data Found!</div>
                                    </div>
                                    <div className="col-4"></div>

                                </div>
                            : ''
                }

            </div>
            <SearchModal data={data} />
        </>
    )
}
export default Search