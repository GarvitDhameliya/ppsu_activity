import ProfileDetails from "./profileDetails/ProfileDetails"
import ProfileImg from "./profileImg/ProfileImg"
import ChnagePassword from "./chnagePassword/ChnagePassword"
const ProfileBody = () => {
    return (
        <>
            <div className="col-sm-6 col-md-8 col-lg-8 mb-4">
                <div className="row">
                    {/* 
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <ProfileImg />
                    </div> */}
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <ProfileDetails />
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
                <h4>Change Password</h4>
                <ChnagePassword />
            </div>
        </>
    )
}
export default ProfileBody