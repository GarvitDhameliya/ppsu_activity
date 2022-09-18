import CCTable from "./CCView/CCTable"


const CCView = (props) => {
    const { data } = props
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Class Coordinators</h5>
                <CCTable data={data} />
            </div>
        </>
    )
}
export default CCView