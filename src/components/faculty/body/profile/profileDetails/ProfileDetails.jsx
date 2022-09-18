import { useSelector } from 'react-redux'
const ProfileDetails = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)
    return (
        <>
            <div className='mb-4 mt-2 '>
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={facultyReducer.facultyProfile?.name}
                    disabled
                />
            </div>
            <div className='mb-4 mt-2 '>
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={facultyReducer.facultyProfile?.username}
                    disabled
                />
            </div>


            <div className='mb-4 mt-2 '>
                <label>Class</label>
                {
                    facultyReducer.facultyProfile.class.length > 0 ?
                        facultyReducer.facultyProfile.class.map((data, index) => {
                            return (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder={`${data.name}_${data.betch}`}
                                    disabled
                                />
                            )
                        }) : <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="No Class Assign!"
                            disabled
                        />

                }
            </div>

            <div className='mb-4 mt-2 '>
                <label>Gender</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={facultyReducer.facultyProfile?.gender}
                    disabled
                />
            </div>
        </>
    )

}
export default ProfileDetails