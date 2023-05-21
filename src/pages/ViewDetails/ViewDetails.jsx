import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const [data, setData]= useState([])
   const {id} =useParams();
  useEffect(()=>{
     fetch('http://localhost:5000/allproducts')
     .then(res => res.json())
     .then(data => setData(data))
  },[])
  const newdata = data.find(fd => fd._id!==id)
  console.log(newdata)
    return (
        <div className='lg:flex lg:ml-8 ml-1 lg:mt-10 mt-2'>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <figure><img className='lg:rounded-2xl' src={newdata?.product_url} alt="Shoes" /></figure>
                    </div>
                </div>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">{newdata?.name}</h2>
                            <div className="flex">
                                <span><small><span className="text-green-700 font-bold">Seller Name:</span>{newdata?.seller_name}</small></span> ||
                                <span className="ml-1"><small><span className="text-red-900 font-bold">Seller Email:</span>{newdata?.seller_email}</small></span>
                            </div>
                            <p>Price: <span className='text-orange-900'>$200</span> </p>
                            <div>
                                    <Rating
                                        placeholderRating={newdata?.rating}
                                        emptySymbol={<FaRegStar className='text-orange-700'></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-orange-700'></FaStar>}
                                        fullSymbol={<FaStar className='text-orange-700'></FaStar>}
                                    />
                                    <span className='ml-1'>{newdata?.rating}</span>
                                </div>
                            <p className="font-semibold text-yellow-700">Qunatity:1</p>
                            <p><span className="font-semibold">Product Description:</span>
                              {newdata?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ViewDetails;