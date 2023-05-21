import { useForm } from "react-hook-form";



const Update = () => {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
    return (
        // price, quantity,description
        <form onSubmit={handleSubmit(onSubmit)} className="text-center mt-4">
            {/* register your input into the hook by invoking the "register" function */}
            <input className="input mb-4 w- input-bordered input-accent w-full max-w-xs"  defaultValue="test" {...register("example")} />
                <br />
            {/* include validation with required or other standard HTML validation rules */}
            <input className="input mb-4 input-bordered input-accent w-full max-w-xs"  {...register("exampleRequired", { required: true })} />
           <br />
            <input type='textarea' className="input mb-4 input-bordered input-accent w-full max-w-xs"  {...register("exampleRequired", { required: true })} />
            <br />
            <input className="block mx-auto btn btn-outline btn-error normal-case" type="submit" value='Update' />
        </form>

    );
};

export default Update;