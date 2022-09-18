import { useSelector } from 'react-redux'
const ProfileDetails = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <>
            <div className='mb-4 mt-2 '>
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={apcReducer.apcProfile.name}
                    disabled
                />
            </div>
            <div className='mb-4 mt-2 '>
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={apcReducer.apcProfile.username}
                    disabled
                />
            </div>

            {/* 
                <div className='mb-4 mt-2 '>
                    <label>Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={facultyReducer.facultyProfile.gender}
                        disabled
                    />
                </div> */}
        </>
    )

}
export default ProfileDetails