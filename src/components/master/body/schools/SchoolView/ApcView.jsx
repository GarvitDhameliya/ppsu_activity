import ApcTable from "./apcView/ApcTable"


const ApcView = (props) => {
    const { data } = props
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Activity Points Coordinators</h5>
                <ApcTable data={data} />
            </div>
        </>
    )
}
export default ApcView