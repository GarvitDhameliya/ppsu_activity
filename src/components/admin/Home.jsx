import Card from "./body/home/card/Card"
import './assets/css/styles.css'
import Chart from "./body/home/chart/Chart"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
import ManageApcTable from "./body/manage/collpas/manageApc/table/ManageApcTable"
const Home = () => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    return (
        <>
            <div className="container main_container mt-5">
                {
                    instAdminReducer.instadmin_profile_dataIsLoaded === true && instAdminReducer.getApc_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <h4 className="mb-4">Statistics</h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <Card />
                                </div>
                                {/* <div className="col-sm-12 col-md-6 col-lg-5">
                                    <Chart />
                                </div> */}
                            </div>
                            <div className="mt-5 card instadmin_home_card">
                                <h5 className="pl-4 mt-4">Activity Points Coordinators</h5>
                                <ManageApcTable />
                            </div>
                        </>
                        : Loader()
                }
            </div>
        </>
    )
}

export default Home