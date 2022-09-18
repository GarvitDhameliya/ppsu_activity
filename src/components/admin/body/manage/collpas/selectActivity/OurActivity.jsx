import ShowOurActivity from "./ourActivity/ShowOurActivity"

const OurActivity = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Selected Activity</h5>
                <hr />
                <ShowOurActivity />
            </div>
        </>
    )
}
export default OurActivity