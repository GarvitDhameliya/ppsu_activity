import ProfileBody from "./body/profile/ProfileBody"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
const Profile = () => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    return (
        <div className="container main_container mt-5">
            {
                instAdminReducer.instadmin_profile_dataIsLoaded === true
                    ? <>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="mb-5">Profile</h3>
                            </div>
                        </div>
                        <div className="row">
                            <ProfileBody />
                        </div>
                    </>
                    : Loader()
            }
        </div>
    )
}
export default Profile