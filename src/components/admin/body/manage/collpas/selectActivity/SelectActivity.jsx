import SelectionActivity from "./selectActivity/SelectionActivity"

const SelectActivity = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Available Activity</h5>
                <hr />
                <SelectionActivity />
            </div>
        </>
    )
}
export default SelectActivity