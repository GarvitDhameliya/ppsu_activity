import { BallTriangle } from "react-loader-spinner";
import ppsu_logo from '../assets/img/loader_ppsu_logo.png'

export const Loader = () => {
    return (
        <div className="container mt-5">
            <div className="loader">
                {/* <BallTriangle
                    color="#EC433A"
                    height={120}
                    ariaLabel='ppsuLoader'
                    width={120}
                /> */}
                <img src={ppsu_logo} width={120} alt="ppsu" className="img-responsive" style={{ opacity: 0.5 }} />
            </div>
            <div className="text-center mt-4">Loading..</div>
        </div>
    )
}

export const noSchool = () => {
    return (
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Opps!</h4>
            <p>There is <strong>No School</strong> for you</p>
            <hr />
            <p className="mb-0">If there is any issue and any query, Please contact respective APC!</p>
        </div>
    )
}

export const noClass = () => {
    return (
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Opps!</h4>
            <p>There is <strong>No class</strong> Assign for You.</p>
            <hr />
            <p className="mb-0">If there is any issue and any query, Please contact respective APC!</p>
        </div>
    )
}



// Status

export const Pending = 'Pending' // Pending
export const Recommend = 'Recommended' // Approved
export const ToBeRevised = 'ToBeRevised'  //Revise
export const Approved = 'Approved' // Compleated
export const NotRecommend = 'NotRecommended' // Reject (Faculty side)
export const NotApproved = 'NotApproved' // Reject (APC side)
