import '../../../assets/css/style.css'
import AdminTable from './SchoolView/AdminTable'
import Card from './SchoolView/Card'

const Home = (props) => {
    const { data } = props

    return (
        <>


            {/* <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h4 className="mb-4">Home</h4>
                    </div>
                </div> */}

            <Card data={data} />

            {/* <div className="col-sm-12 col-md-6 col-lg-5">
                                    <Chart />
                                </div> */}

            <div className="mt-5 card instadmin_home_card">
                <h5 className="pl-4 mt-4">School Dean/Principal</h5>
                <AdminTable data={data} />
            </div>
        </>
    )
}

export default Home