import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {
const user = useLoaderData();
const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
const onSubmit = data =>
            fetch(`https://toy-market-server-pi.vercel.app/allproduct/${user._id}`,{
                method:'put',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res =>res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                reset();
            })
    return (
        
        <form onSubmit={handleSubmit(onSubmit)} className="text-center mt-4">
            {/* register your input into the hook by invoking the "register" function */}
            <input className="input mb-4 w- input-bordered input-accent w-full max-w-xs"  defaultValue={user.price} {...register("price")} />
                <br />
            {/* include validation with required or other standard HTML validation rules */}
            <input className="input mb-4 input-bordered input-accent w-full max-w-xs" defaultValue={user.quantity} {...register("quantity", { required: true })} />
           <br />
            <input type='textarea' className="input mb-4 input-bordered input-accent w-full max-w-xs" defaultValue={user.description}  {...register("description", { required: true })} />
            <br />
            <input className="block mx-auto btn btn-outline btn-error normal-case" type="submit" value='Update' />
        </form>

    );
};

export default Update;