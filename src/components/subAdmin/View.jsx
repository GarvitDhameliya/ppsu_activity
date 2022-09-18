import View_body from "./body/viewReq/View"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
const View = () => {

    const apcReducer = useSelector(state => state.apcReducer)
    const params = useParams();
    if (apcReducer.get_activity_by_school_apc_dataIsLoaded === true) {
        return (
            <>

                <div className="container main_container mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h3 className="mb-4">Activity </h3>
                        </div>
                    </div>
                    {
                        apcReducer.apcActivityReqBySchool.map((data, index) => {
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
    } else {
        <>
            <div className="container main_container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        Loading..
                    </div>
                </div>
            </div>
        </>
    }

}
export default View