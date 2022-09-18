import ProfileBody from "./body/profile/ProfileBody"
import { Loader, noSchool } from "../constant/constant"
import { useSelector } from "react-redux/es/exports"
const Profile = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <div className="container main_container mt-5">
            {
                apcReducer.apc_profile_dataIsLoaded === true
                    ? !apcReducer.apcProfile.school?._id && !apcReducer.apcProfile.school?.name
                        ? noSchool()
                        : <>
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