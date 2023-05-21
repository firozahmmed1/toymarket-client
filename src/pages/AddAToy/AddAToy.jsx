/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2'
import CreatableSelect from 'react-select/creatable'



//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];
const AddAToy = () => {
    const [data, setdata] =useState([])
    useEffect(()=>{
        fetch('https://toy-market-server-pi.vercel.app/allproducts')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])
    const options = data.map(da=> da.sub_category);

    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.sub_category=selectedOption;
        fetch('https://toy-market-server-pi.vercel.app/product', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    let timerInterval
                    Swal.fire({
                        title: 'Processing for add a toy',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('')
                        }
                    })

                }

            })

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
                            options={options}
                            placeholder="Sub Category"
                            required
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