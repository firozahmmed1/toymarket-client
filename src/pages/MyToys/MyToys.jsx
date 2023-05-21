/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [dataUser, setUser] = useState([])

    useEffect(() => {
        fetch(`https://toy-market-server-pi.vercel.app/allproducts/${user?.email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user]);

    const handleDelete =id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-server-pi.vercel.app/allproducts/${id}`,{
                    method:'delete'
                })
            .then(res=>res.json())
            .then(data => {
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
                
            }
          })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead >
                    <tr >
                        <th className="normal-case">Picture</th>
                        <th className="normal-case">Name</th>
                        <th className="normal-case">Seller Name</th>
                        <th className="normal-case">Email</th>
                        <th className="normal-case">Sub_Catagory</th>
                        <th className="normal-case">Price</th>
                        <th className="normal-case">Quantity</th>
                        <th className="normal-case">Description</th>
                        <th className="normal-case"></th>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.map(da => (
                        <tr 
                        key={da._id}
                        >
                        <td>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={da?.product_url} />
                                </div>
                            </div>
                        </td>
                        <td>{da?.name}</td>
                        <td>{da?.seller_name}</td>
                        <td>{da?.seller_email}</td>
                        <td>{da?.sub_category?.label}</td>
                        <td>$ {da.price}</td>
                        <td>{da.quantity}</td>
                        <td>{da.description}</td>
                        <td><Link to={`/update/${da._id}`} className="btn btn-xs">Update</Link></td>
                        <td><button onClick={()=>handleDelete(da._id)} className="btn btn-xs">Delete</button></td>
                    </tr>

                    ))}
                    

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;