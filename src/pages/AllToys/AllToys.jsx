/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
console.log(data)
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr> 
                        <th className="normal-case">Name</th>
                        <th className="normal-case">Toy Name</th>
                        <th className="normal-case">Sub-Category</th>
                        <th className="normal-case">Price</th>
                        <th className="normal-case">Quantity</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                {data.slice(0,20).map(ab => (
                    <tr> 
                        <td>{ab?.seller_name}</td>
                        <td>{ab.name}</td>
                        <td>{ab.sub_category.label}</td>
                        <td>${ab.price}</td>
                        <td>{ab.quantity}</td>
                        <td><Link to={`/viewdetails/${ab._id}`} className="btn btn-outline btn-accent normal-case btn-xs">View Details</Link></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;