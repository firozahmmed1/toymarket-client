/* eslint-disable react/jsx-key */


import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
  const[userdata, setUserData] =useState([])
    useEffect(()=>{
            fetch('https://toy-market-server-pi.vercel.app/allproducts')
            .then(res=>res.json())
            .then(data => setUserData(data));
    },[])
  
  const results = userdata?.map(da=> da.sub_category);
    // eslint-disable-next-line no-unused-vars
    return (
        <div className="mt-12 mb-12">
            <h1 className="text-4xl font-bold text-center italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Shop By Category</h1>
            <Tabs>
                <h1 className='text-xl text-orange-800 font-semibold'>Educational and Learning Toys</h1>
                <TabList>
                    {
                        results.slice(4, 6).map(re =>(
                            <Tab><span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-950'>{re.label}</span></Tab>
                        ))
                    }
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/BK3vw8n/a4cc32b9c3.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name</h2>
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
                                <div className="card-actions flex justify-end">
                                    <Link to='/viewdetails' className="btn btn-accent text-white normal-case">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;