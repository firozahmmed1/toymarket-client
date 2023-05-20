import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { AuthContext } from "../../contexts/AuthProvider";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];
const AddAToy = () => {
    const {user} =useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)
         data.sub_category=selectedOption;
    };
    
    return (
        <div>
            <h1 className="text-2xl text-center text-success">Please Fillup Add a Toy with Require Field</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" pl-1 pr-1 mt-12">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="md:flex gap-5">
                    <input className="md:w-3/6 mb-5 w-full input input-bordered input-success" placeholder="Picture URL of the toy" {...register("product_url", { required: true })} />
                    <input className="md:w-3/6 w-full input input-bordered input-success" placeholder="Product Name" {...register("name", { required: true })} />
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-3/6 mb-5 w-full input input-bordered input-success" defaultValue={user?.displayName} {...register("seller_name")} />
                    <input className="md:w-3/6 w-full input input-bordered input-success" defaultValue={user?.email} {...register("seller_email", { required: true })} />
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-2/6 mb-5 w-full input input-bordered input-success" placeholder="Price" {...register("price", { required: true })} />
                    <input className="md:w-2/6 w-full input input-bordered input-success" placeholder="Rating" {...register("rating", { required: true })} />
                    <div className="md:w-2/6 w-full">
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            // options={options}
                            placeholder='Sub Category'
                            required
                            isMulti
                        />
                    </div>
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-1/6 mb-5 w-full input input-bordered input-success" placeholder="Quantity" {...register("quantity", { required: true })} />
                    <input className="md:w-5/6 w-full input input-bordered input-success" placeholder="Description" {...register("description", { required: true })} />
                </div>
                <input className="block md:w-1/6 btn btn-success normal-case" type="submit" value='Add A Toy' />
            </form>
        </div>
    );
};

export default AddAToy;