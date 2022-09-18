import ManageClassTable from "./table/ManageClassTable"

const ManageClass = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Branches</h5>
                <ManageClassTable />
            </div>
        </>
    )
}
export default ManageClass