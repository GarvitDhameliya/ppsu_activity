import { useSelector } from "react-redux"
import ProfileBody from "./body/profile/ProfileBody"
import { noClass, noSchool, Loader } from "../constant/constant"

const Profile = () => {
    const studentReducer = useSelector(state => state.studentReducer)
    return (
        <>
            {
                studentReducer.student_profile_dataIsLoaded === true
                    ? !studentReducer.studentProfile.class?._id && !studentReducer.studentProfile.class?.name
                        ? noClass()
                        : !studentReducer.studentProfile.school?._id && !studentReducer.studentProfile.school?.name
                            ? noSchool()
                            : <div className="container main_container mt-5">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <h3 className="mb-5">Profile</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <ProfileBody />
                                </div>
                            </div>
                    : Loader()
            }
        </>
    )
}
export default Profile
