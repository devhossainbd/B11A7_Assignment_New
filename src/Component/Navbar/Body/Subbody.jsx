import React from 'react';
import { GrFavorite } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";


export const handleAddData = (products) => {
    toast.success("You card add successfully");
};

const Subbody = ({ products, handlebookmark }) => {
    return (
        <div>
            <table className='w-full border-1'>
                <tbody className=' flex-col'>
                    
                    <tr>
                        <td><img className=" w-20 h-20 " src={products.product_img} alt="" /></td>
                        <td>{products.product_name}</td>
                        <td>{products.product_price}</td>
                        <td>{products.product_time_left}</td>
                        <td>
                            <button onClick={() => { handleAddData(); handlebookmark(products); }}><GrFavorite /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Subbody;
