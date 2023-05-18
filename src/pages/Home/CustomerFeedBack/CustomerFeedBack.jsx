/* eslint-disable react/no-unescaped-entities */
import {FaStar } from 'react-icons/fa';

const CustomerFeedBack = () => {
    return (
        <div className="mt-12">
            <h1 className="text-4xl font-bold text-center italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Customer Saying</h1>
            <div className="lg:flex gap-7 mt-12">
                <div className="card lg:w-3/6 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src="https://i.ibb.co/44NF0jg/Women-working-in-the-office-Stock-Photo.jpg" />
                            </div>
                            <div className="ml-4">
                            <h2 className="font-semibold mt-4">Jessica Nina</h2>
                            <span className='flex text-orange-400'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                            </div>
                        </div>
                        <p>I'm always impressed by the wide range of toys this store has to offer. It's my go to for all things playtime</p>
                    </div>
                </div>
                <div className="card lg:w-3/6 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src="https://i.ibb.co/8cHRPyr/portrait-young-woman-sunglasses-1440x960.jpg" />
                            </div>
                            <div className="ml-4">
                            <h2 className="font-semibold mt-4">Andrea</h2>
                            <span className='flex text-orange-400'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                            </div>
                        </div>
                        <p>I appreciate the focus on sustainable and eco-friendly toys at this shop. It's so important for our kids' future.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerFeedBack;