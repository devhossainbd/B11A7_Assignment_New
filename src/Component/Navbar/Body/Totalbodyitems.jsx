import { useMemo } from 'react';
import { GrFavorite } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";


const Totalbodyitems = ({ bookmark }) => {

// Calculate total bid amount using useMemo for optimization
    const totalBidAmount = useMemo( () =>
        bookmark.reduce((sum, item) => {
            const price = item.product_price ?
            Number(item.product_price.replace(/[$,]/g, '')): 0;
            return sum + price;}, 0), [bookmark]);
        

  return (
    <div className="bg-gray-500 shadow-xl">
      <div className="flex gap-3 justify-center items-center p-5">
        <GrFavorite size={25} />
        <h1 className="text-3xl">Favorite Items</h1>
      </div>
      

      <div>
        {bookmark.map((data, idx) => (
          console.log(data.id),
          <div key={idx} className="flex gap-5 p-2 items-center">
            <img className="w-20 h-20" src={data.product_img} alt="" />
            <div>
              {data.product_name } 

              <br /><br />
              {data.product_price}
              <button><IoCloseOutline onClick= {()=>removeItem(data.id)} size={30} /></button>
            </div>
          </div>
        ))}
      </div>





      {/* 👉 এখানে টোটাল দেখাচ্ছি */}
      <div className="p-5">
        <h1 className="text-2xl">
          Total bids Amount: ${totalBidAmount.toLocaleString()}
        </h1>
      </div>
    </div>
  );
};

export default Totalbodyitems;
