import { useSelector } from 'react-redux'
const ProfileDetails = () => {
    const studentProfileReducer = useSelector(state => state.studentReducer)
    // if (studentProfileReducer.student_profile_dataIsLoaded === true) {
    return (
        <>
            <div className='mb-4 mt-2 '>
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={studentProfileReducer.studentProfile.name}
                    disabled
                />
            </div>
            <div className='mb-4 mt-2 '>
                <label>Enrollment Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={studentProfileReducer.studentProfile.enrollmentNo}
                    disabled
                />
            </div>

            <div className='mb-4 mt-2 '>
                <label>Class</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={studentProfileReducer.studentProfile.class.name}
                    disabled
                />
            </div>

            <div className='mb-4 mt-2 '>
                <label>Joining Year</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={studentProfileReducer.studentProfile.class.betch}
                    disabled
                />
            </div>
        </>
    )
    // } else {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

}
export default ProfileDetails