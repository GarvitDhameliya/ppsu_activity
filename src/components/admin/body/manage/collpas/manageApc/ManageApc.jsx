import ManageApcTable from "./table/ManageApcTable"

const ManageApc = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Activity Points Coordinators</h5>
                <ManageApcTable />
            </div>
        </>
    )
}
export default ManageApc