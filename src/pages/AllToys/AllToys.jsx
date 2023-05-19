import { Link } from "react-router-dom";

const AllToys = () => {
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
                    {/* row 1 */}
                    <tr>
                        
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>$100</td>
                        <td>4</td>
                        <td><Link to='/viewdetails' className="btn btn-outline btn-accent normal-case btn-xs">View Details</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;