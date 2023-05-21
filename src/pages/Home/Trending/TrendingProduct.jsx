/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const TrendingProduct = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then(res=> res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="mt-20 space-y-4 ">
            <h1 className="text-4xl font-bold text-center italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Trending Product</h1>
            <p className="text-center leading-6">The Interactive Learning Toy is a cutting-edge educational device designed to engage and entertain  <br /> children while fostering their cognitive development. This innovative toy combines interactive features, stimulating activities, and  adaptive learning algorithms to create an immersive and personalized learning experience.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5">
                {data?.slice(0,4)?.map(mp=> (
            <div className="w-full h-96 rounded relative bg-slate-200 flex items-center justify-center">
                <div className="avatar">
                    <div className="w-48 rounded">
                        <img src={mp?.product_url} />
                    </div>
                </div>
                <div className="absolute bottom-4 left-5">
                        
                        <p className="font-semibold text-orange-500">$ {mp?.price}</p>
                    </div>
            </div>

                ))}
            </div>
        </div>
    );
};

export default TrendingProduct;