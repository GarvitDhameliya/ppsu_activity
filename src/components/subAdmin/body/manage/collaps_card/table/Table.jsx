import React from 'react'

const Table = () => {
    return (
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
                        <td>19SE02CE015@ppsu.ac.in</td>
                        <td>Garvit Dhameliya</td>
                        <td>
                            <span className='mr-5'>view</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Table