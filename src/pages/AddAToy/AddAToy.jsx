import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const AddAToy = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(selectedOption)
    return (
        <div>
            <h1 className="text-2xl text-center text-success">Please Fillup Add a Toy with Require Field</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" pl-1 pr-1 mt-12">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="md:flex gap-5">
                    <input className="md:w-3/6 mb-5 w-full input input-bordered input-success" defaultValue="test" {...register("name")} />
                    <input className="md:w-3/6 w-full input input-bordered input-success" {...register("exampleRequired", { required: true })} />
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-3/6 mb-5 w-full input input-bordered input-success" defaultValue="test" {...register("example")} />
                    <input className="md:w-3/6 w-full input input-bordered input-success" {...register("exampleRequired", { required: true })} />
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-3/6 mb-5 w-full input input-bordered input-success" defaultValue="test" {...register("example")} />
                    <input className="md:w-3/6 w-full input input-bordered input-success" {...register("exampleRequired", { required: true })} />
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-2/6 mb-5 w-full input input-bordered input-success" defaultValue="test" {...register("example")} />
                    <input className="md:w-2/6 w-full input input-bordered input-success" {...register("exampleRequired", { required: true })} />
                    <div className="md:w-2/6 w-full">
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                    </div>
                </div>
                <div className="md:flex gap-5 mt-5">
                    <input className="md:w-1/6 mb-5 w-full input input-bordered input-success" defaultValue="test" {...register("example")} />
                    <input className="md:w-5/6 w-full input input-bordered input-success" {...register("exampleRequired", { required: true })} />
                </div>
                <input className="block md:w-1/6 btn btn-success normal-case" type="submit" value='Add A Toy' />
            </form>
        </div>
    );
};

export default AddAToy;