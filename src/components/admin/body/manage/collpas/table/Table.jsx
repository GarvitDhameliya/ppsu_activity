const Table = () => {
    return (
        <>
            <div className='table-responsive-sm mt-5'>
                <table className="table data-table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >1</th>
                            <td>vivek.bodarya@ppsu.ac.in</td>
                            <td>Vivek Bodarya</td>
                            <td>
                                <span className='mr-5'>view</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table