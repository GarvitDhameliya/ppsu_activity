import AddHeading from "./heading_modal/modal_body/AddHeading"

const HeadingModal = () => {
    return (
        <>
            {/* Model */}
            <div className="modal fade" id="headingModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Activity</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <AddHeading />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeadingModal