import { useSelector } from 'react-redux'
const TotalPoints = () => {
    const studentReducer = useSelector(state => state.studentReducer)
    const duration = studentReducer.studentProfile?.class?.duration
    return (
        <>
            <div className="card text-center p-2 student_total_point_card">
                <div className='card-body'>
                    <div className='font'>Total Points</div>
                    <div>
                        {
                            duration === 4
                                ? <span className='point'>
                                    {studentReducer.studentProfile.totalPoint}
                                    <span className='tpoint'>/100</span>
                                </span>
                                : duration === 3
                                    ? <span className='point'>
                                        {studentReducer.studentProfile.totalPoint}
                                        <span className='tpoint'>/70</span>
                                    </span>
                                    : duration === 2
                                        ? <span className='point'>
                                            {studentReducer.studentProfile.totalPoint}
                                            <span className='tpoint'>/50</span>
                                        </span>
                                        : <span className='point'>
                                            {studentReducer.studentProfile.totalPoint}
                                            <span className='tpoint'>/100</span>
                                        </span>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
export default TotalPoints