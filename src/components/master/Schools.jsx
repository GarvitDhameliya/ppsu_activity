import Schools_body from "./body/schools/Schools"
import { useSelector } from 'react-redux'
const Schools = () => {

    const coeSchool = useSelector(state => state.coeReducer)

    if (coeSchool.getSchool_dataIsLoaded === true)
        return (
            <>
                <div className="container main_container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                                <h3 className="mb-4">Schools</h3>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <Schools_body />
                    </div>
                </div>
            </>
        )
    else
        return (
            <>Data is Loading..</>
        )
}
export default Schools