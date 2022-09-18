const ActivityRequest = () => {
    return (
        <>
            <div className="card instadmin_home_card">
                <h5 className="pl-4 mt-4">Activity Request</h5>
                <form className="p-4">

                    <div className='mb-4 mt-2 '>
                        <select name="" id="" className="filter_select_menu">
                            <option value="">Select Main Category</option>
                            <option value="">Volvo</option>
                            <option value="">Saab</option>
                            <option value="">Mercedes</option>
                            <option value="">Audi</option>
                        </select>
                    </div>

                    <div className='mb-4 mt-2 '>
                        <label>Name<span className='text-danger'> *</span></label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                        />
                        <span className="text-danger"></span>
                    </div>

                    <div className='mb-4 mt-2 '>
                        <label>Description<span className='text-danger'> *</span></label>
                        <textarea
                            type="text"
                            name="name"
                            className="form-control"
                            rows={3}
                        ></textarea>
                        <span className="text-danger"></span>
                    </div>

                    <button type="sumit" className="btn submit-btn">Add</button>
                </form>
            </div>
        </>
    )
}
export default ActivityRequest