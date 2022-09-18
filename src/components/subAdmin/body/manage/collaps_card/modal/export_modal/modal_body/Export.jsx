
import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_CREATE_CC_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Export = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)


    // //console.log(apcReducer)


    const exportpdf = () => {
        let doc = new jsPDF
        let a = []
        apcReducer.apcStudent?.map((d, ind) => {
            d.requests.map((data, ind) => {
                if (data.status === "Pending") {
                    a.push([d.enrollmentNo, d.name, d.totalPoint, d.class.name, d.school.name, data.status])
                }
            })

        })
        autoTable(doc, { html: '#my-table' })
        autoTable(doc, {
            head: [['Enrollment No', 'Name', 'TotalPoint', 'Class', 'School', 'Status']],
            body: a,
        })
        doc.save('test.pdf')
    }

    const exportCsv = () => {
        let csvRow = []
        let a = [['', 'Enrollment No', 'Name', 'TotalPoint', 'Class', 'School', 'Status']]

        apcReducer.apcStudent?.map((d, ind) => {
            d.requests.map((data, ind) => {
                if (data.status === "Pending") {
                    a.push([d.enrollmentNo, d.name, d.totalPoint, d.class.name, d.school.name, data.status])
                }
            })
        })
        // //console.log(a)

        a.map((data, ind) => {
            csvRow.push(data.join(","))
        })

        let csvString = csvRow.join("%0A")
        // //console.log(csvString)

        let anchor = document.createElement("a")
        anchor.href = 'data:attachment/csv' + csvString
        // anchor.target = "_Blank";
        anchor.download = "testfile.csv"
        document.body.appendChild(anchor)
        anchor.click()

    }



    // Using UseForm to get All feild data (not file upload)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // //console.log(data)
        if (data.select === "CSV") {
            exportCsv()
        }
        else if (data.select === "PDF") {
            exportpdf()
        }
    }


    if (apcReducer.apc_profile_dataIsLoaded === true) {
        return (
            <>
                <div className="alert alert-info mb-4" role="alert">
                    <strong>Instruction</strong>
                    <li>All feild are Required!</li>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-4 mt-2 '>

                        <select className="form-control form-control-sm "
                            style={{ cursor: 'pointer' }}
                            name="select"
                            {...register("select", {
                                required: true
                            })}

                        >
                            <option defaultValue value="">Select Type</option>
                            <option value="CSV">CSV</option>
                            <option value="PDF">PDF</option>
                        </select>
                        <span className="text-danger">{errors.select?.type === 'required' && "Selection is required!"}</span>
                    </div>



                    <div className="mt-5 d-flex justify-content-end">
                        <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                        <button type="sumit" className="btn submit-btn">Export</button>
                    </div>

                </form>
            </>
        )
    } else {
        return (
            <>
                Loading..
            </>
        )
    }
}

export default Export