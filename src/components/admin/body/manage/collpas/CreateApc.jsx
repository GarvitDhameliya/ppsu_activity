import CreateApcForm from "./createApc/CreateApcForm"

const CreateApc = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Create Coordinators (APC)</h5>
                <CreateApcForm />
            </div>
        </>
    )
}

export default CreateApc