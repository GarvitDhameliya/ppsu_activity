import { useSelector } from "react-redux"

const CCTable = (props) => {

    const { data } = props

    const apcReducer = useSelector(state => state.apcReducer)


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

                            apcReducer.apcCC?.map((e, ind) => {

                                return (
                                    <tr key={ind}>
                                        <th scope="row" className='text-center'>{ind + 1}</th>
                                        <td className='text-center'>{e.name}</td>
                                        <td className='text-center'>{e.username}</td>
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
export default CCTable