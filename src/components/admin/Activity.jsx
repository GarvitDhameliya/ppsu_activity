import ActivityData from "./body/activity/filter/FilterActivity"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
const Activity = () => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <>
            <div className="container main_container mt-5">
                {
                    instAdminReducer.instadmin_profile_dataIsLoaded === true
                        ? apcReducer.class_dataIsLoaded === true && apcReducer.all_student_dataIsLoaded === true && instAdminReducer.get_selection_activity_success === true && apcReducer.get_activity_by_school_apc_dataIsLoaded === true
                            ? <>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <h4 className="mb-4">Report</h4>
                                    </div>
                                </div>
                                <ActivityData />
                            </>
                            : Loader()
                        : Loader()
                }

            </div>
        </>
    )
}
export default Activity