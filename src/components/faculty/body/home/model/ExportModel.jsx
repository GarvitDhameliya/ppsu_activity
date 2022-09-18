
import Export from './model_body/Export'
const ExportModel = (props) => {
    return (
        <>
            {/* Model */}
            <div className="modal fade" id="exportModelFaculty" tabIndex="-1" role="dialog" aria-labelledby="exportModelFaculty" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exportModelFaculty">Export Report</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            {
                                props.data.length > 0
                                    ? <Export data={props.data} />
                                    : 'There is No Data Found for Export'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ExportModel