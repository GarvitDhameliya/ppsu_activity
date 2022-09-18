import View_body from "./body/viewReq/View"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Loader } from "../constant/constant";
const View = () => {

    const studentReqReducer = useSelector(state => state.studentReducer)
    const params = useParams();
    if (studentReqReducer.dataIsLoaded === true && studentReqReducer.student_profile_dataIsLoaded === true && studentReqReducer.get_heading_dataIsLoaded === true) {
        if (!studentReqReducer.studentProfile.class._id || !studentReqReducer.studentProfile.school?._id || !studentReqReducer.studentProfile.school?.name) {
            return (
                <div className="container main_container mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="alert alert-warning" role="alert">
                                <h4 className="alert-heading">Opps!</h4>
                                <p>Something went wrong!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <div className="container main_container mt-5 mb-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="mb-4">Activity</h3>
                            </div>
                        </div>
                        {
                            studentReqReducer.studentActivityRequest.map((data, index) => {
                                if (data._id === params.id) {
                                    return (
                                        <div key={index}>
                                            <View_body data={data} />
                                        </div>
                                    )
                                } else {

                                }
                            })
                        }

                    </div>

                </>
            )
        }
    } else {
        return (
            Loader()
        )
    }

}
export default View