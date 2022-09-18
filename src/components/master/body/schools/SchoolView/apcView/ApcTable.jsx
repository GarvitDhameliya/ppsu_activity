
const ApcTable = (props) => {

    const { data } = props

    // //console.log(data, "this is coe")

    return (
        <>
            <div className='table-responsive mt-5'>
                <table className="table data-table ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.committee?.map((data, ind) => {
                                return (
                                    <tr>
                                        <th scope="row" className='text-center'>{ind + 1}</th>
                                        <td className='text-center'>{data.name}</td>
                                        <td className='text-center'>{data.username}</td>
                                        <td className='text-center'>{ }</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ApcTable