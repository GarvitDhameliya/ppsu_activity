import Card from "./body/manage/card/Card"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
const Manage = () => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const coeReducer = useSelector(state => state.coeReducer)
    return (
        <>
            <div className="container main_container mt-5 mb-5">
                {
                    instAdminReducer.instadmin_profile_dataIsLoaded === true
                        ? instAdminReducer.getApc_dataIsLoaded === true && instAdminReducer.get_selection_activity_success === true && coeReducer.get_heading_dataIsLoaded === true && instAdminReducer.get_activity_dataIsLoaded === true && instAdminReducer.getClass_dataIsLoaded === true
                            ? <>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <h4 className="mb-4">Governance</h4>
                                    </div>
                                </div>
                                <Card />
                            </>
                            : Loader()
                        : Loader()
                }
            </div>
        </>
    )
}
export default Manage