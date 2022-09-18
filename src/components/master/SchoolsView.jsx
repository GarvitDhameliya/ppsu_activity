import SchoolsView_body from "./body/schools/SchoolsView"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { REQ_FOR_GET_CC_PROGRESS } from "../../redux/subAdmin/action/action"
const SchoolsView = () => {

    const dispatch = useDispatch()
    const coeSchool = useSelector(state => state.coeReducer)

    const params = useParams()

    dispatch({ type: REQ_FOR_GET_CC_PROGRESS, payload: params.id })

    if (coeSchool.getSchool_dataIsLoaded === true)
        return (
            <>
                {
                    coeSchool.coeSchool?.result?.map((data, ind) => {
                        if (params.id === data._id) {
                            return (
                                <div className="container main_container mt-5">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="row">
                                                <h3 className="mb-4">{data.name}</h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <SchoolsView_body data={data} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </>
        )
    else
        return (
            <>Data is Loading..</>
        )
}
export default SchoolsView