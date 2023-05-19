import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ViewDetails = () => {
    return (
        <div className='lg:flex lg:ml-8 ml-1 lg:mt-10 mt-2'>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <figure><img className='lg:rounded-2xl' src='https://i.ibb.co/wWnZwPG/999990bd1f.jpg' alt="Shoes" /></figure>
                    </div>
                </div>
                <div className='lg:w-3/6'>
                    <div className="card w-full bg-base-100 ">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Name lorem100</h2>
                            <div className="flex">
                                <span><small><span className="text-green-700 font-bold">Seller Name:</span>Rafiqul Islam Khan</small></span> ||
                                <span className="ml-1"><small><span className="text-red-900 font-bold">Seller Email:</span>14305036firoz@Gmail.com</small></span>
                            </div>
                            <p>Price: <span className='text-orange-900'>$200</span> </p>
                            <div>
                                    <Rating
                                        placeholderRating={3.5}
                                        emptySymbol={<FaRegStar className='text-orange-700'></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-orange-700'></FaStar>}
                                        fullSymbol={<FaStar className='text-orange-700'></FaStar>}
                                    />
                                    <span className='ml-1'>3.5</span>
                                </div>
                            <p className="font-semibold text-yellow-700">Qunatity:1</p>
                            <p><span className="font-semibold">Product Description:</span>
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolore modi asperiores nostrum perferendis beatae in ea, deserunt maxime ab perspiciatis dolorem. Quibusdam itaque perferendis exercitationem recusandae, asperiores tempore harum sequi assumenda unde, ut, ab excepturi soluta adipisci et. Eius sit qui reiciendis quam fugiat, quaerat corrupti eum aut harum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ViewDetails;