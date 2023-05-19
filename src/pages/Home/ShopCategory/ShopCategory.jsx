import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div className="mt-12 mb-12">
            <h1 className="text-4xl font-bold text-center italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">Shop By Category</h1>
            <Tabs>
                <h1 className='text-xl text-orange-800 font-semibold'>Educational and Learning Toys</h1>
                <TabList>
                    <Tab><span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-950'>Title 1</span></Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/BK3vw8n/a4cc32b9c3.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions flex justify-end">
                                    <Link to='/viewdetails' className="btn btn-accent text-white normal-case">View Details</Link>
                                </div>
                            </div>
                        </div>                              
                     </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;