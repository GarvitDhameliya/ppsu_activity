import { useForm } from "react-hook-form";

const CreateApcForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // //console.log(data)
    }
    return (
        <>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4 mt-2 '>
                    <label>Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Z ]*$/
                        })}
                    />
                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                </div>
                <div className='mb-4 mt-2 '>
                    <label>Short Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="shortname"
                        className="form-control"
                        {...register("shortname", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.shortname?.type === 'required' && "Short Name is required!"}</span>
                </div>
                <div className='mb-4 mt-2 '>
                    <label>Email<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        {...register("email", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.email?.type === 'required' && "Email is required!"}</span>
                </div>
                <div className='mb-4 mt-2 '>
                    <label>Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        {...register("password", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                </div>
                <button type="sumit" className="btn submit-btn">Create</button>
            </form>
        </>
    )
}
export default CreateApcForm