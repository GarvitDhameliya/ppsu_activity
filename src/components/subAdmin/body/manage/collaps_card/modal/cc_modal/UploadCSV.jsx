import UploadCC from './modal_body/UploadCC'

const UploadCSV = () => {
    return (
        <>
            {/* Model */}
            <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Upload Class Coordinator</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <UploadCC />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UploadCSV