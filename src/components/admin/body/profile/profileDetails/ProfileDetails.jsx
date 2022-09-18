import { useSelector } from "react-redux"

const ProfileDetails = () => {

    const instadmin = useSelector(state => state.instAdminReducer)

    return (
        <>
            <div className='mb-4 mt-2 '>
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={instadmin.adminProfile.name}
                    disabled
                />
            </div>
            <div className='mb-4 mt-2 '>
                <label>School</label>
                <input
                    type="text"
                    className="form-control"
                    value={instadmin.adminProfile.school.name}
                    disabled
                />
            </div>
        </>
    )
}
export default ProfileDetails