import Card from "./body/home/card/Card"
import Chart from "./body/home/chart/Chart"
import { useSelector } from "react-redux/es/exports"
import { Loader } from "../constant/constant"
import Table from "./body/manage/collaps_card/manage_school/table/Table"

const Home = () => {
    const coeReducer = useSelector(state => state.coeReducer)

    return (
        <>
            <div className="container main_container mt-5">
                {
                    coeReducer.coe_profile_dataIsLoaded === true && coeReducer.getSchool_dataIsLoaded === true && coeReducer.getDean_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <h3 className="mb-4">Statistics</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-12">
                                    <Card />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12 col-md-6 col-lg-12">
                                    <div className="card instadmin_home_card p-3">
                                        <Table />
                                    </div>
                                </div>
                            </div>
                        </>
                        : Loader()
                }
            </div>
        </>
    )
}

export default Home