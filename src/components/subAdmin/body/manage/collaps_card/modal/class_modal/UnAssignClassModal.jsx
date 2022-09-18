import UnAssignClass from "./modal_body/UnAssignClass"


const UnAssignClassModal = (props) => {
    const { data } = props

    return (
        <>
            {/* Model */}
            <div className="modal fade" id={`unassign${data.name}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">UnAssign Class</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <UnAssignClass data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UnAssignClassModal