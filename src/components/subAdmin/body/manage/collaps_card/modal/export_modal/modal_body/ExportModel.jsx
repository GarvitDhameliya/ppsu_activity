import React from 'react'
import Export from './Export'

const ExportModel = () => {
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
                        <Export />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExportModel