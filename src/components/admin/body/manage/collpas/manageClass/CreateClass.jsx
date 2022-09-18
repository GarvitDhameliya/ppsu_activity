import CreateClassForm from "./createClass/CreateClassForm"

const CreateClass = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Create Branch</h5>
                <CreateClassForm />
            </div>
        </>
    )
}

export default CreateClass