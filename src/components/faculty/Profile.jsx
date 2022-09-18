import { useSelector } from "react-redux"
import ProfileBody from "./body/profile/ProfileBody"
import { Loader, noSchool } from "../constant/constant"
const Profile = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)

    return (
        <div className="container main_container mt-5">
            {
                facultyReducer.faculty_profile_dataIsLoaded === true
                    ? !facultyReducer.facultyProfile?.school?.id && !facultyReducer.facultyProfile?.school?.name
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