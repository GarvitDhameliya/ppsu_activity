import React from 'react'
import Export from './Export'
import Export2 from './Export2'

const ExportModal = (props) => {
    return (
        <div className="modal fade" id="exportReport" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Export Report</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                        {
                            props.data[0]?.length > 0 ?
                                props.data[2].role === 'filter1'
                                    ? <Export data={props.data} />
                                    : props.data[2].role === 'filter2' && props.data[0]?.length > 0
                                        ? <Export2 data={props.data} />
                                        : <div>
                                            Opps! Somthing Went Wrong!
                                        </div>
                                : <div>
                                    There is no data Avaiable!
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExportModal