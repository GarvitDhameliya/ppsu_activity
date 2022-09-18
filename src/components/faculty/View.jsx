import View_body from "./body/viewReq/View"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Loader } from "../constant/constant";
const View = () => {

    const facultyReqReducer = useSelector(state => state.facultyReducer)
    const params = useParams();
    if (facultyReqReducer.activity_faculty_dataIsLoaded === true && facultyReqReducer.faculty_profile_dataIsLoaded === true) {
        if (facultyReqReducer.facultyProfile.class.length === 0 || !facultyReqReducer.facultyProfile.school?._id || !facultyReqReducer.facultyProfile.school?.name) {
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
                                <h3 className="mb-4">Activity </h3>
                            </div>
                        </div>
                        {
                            facultyReqReducer.faciltyActivityReqByClass.map((data, index) => {
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