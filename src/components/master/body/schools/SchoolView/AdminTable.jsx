
const AdminTable = (props) => {

    const { data } = props

    return (
        <>
            <div className='table-responsive-sm mt-5'>
                <table className="table data-table ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">School Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row" className='text-center'>1</th>
                            <td className='text-center'>{data.admin?.name}</td>
                            <td className='text-center'>{data?.name}</td>
                            <td className='text-center'>
                                {/* <div className='btn-group'>
                                                    <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#model${data.name}`} onClick={() => setApcId(data)}></i></span>
                                                    <span><i className='bx bxs-trash ml-auto' onClick={() => apcDelete(data._id)}></i></span>
                                                </div> */}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <EditApcModel data={apcId} /> */}
        </>
    )
}
export default AdminTable