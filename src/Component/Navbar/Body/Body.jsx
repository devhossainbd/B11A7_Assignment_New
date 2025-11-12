//Input out of tools
import { useEffect,useState } from 'react';
import Subbody from './Subbody';
import Totalbodyitems from './Totalbodyitems';


//Machine 
const Body =() => {

//State for bookmark
const [bookmark, setBookmark] = useState([])

//Handle bookmark function
const handlebookmark = (products) => {

  setBookmark([...bookmark, products])

}

//useState for remove items



const [remove, setRemove] = useState(0)
console.log(remove);
//Remove product items
const removeItem = (id) => {
    const remaining = bookmark.filter(item => item.id !== id);
    setRemove(remaining);   
}


//State for fetch data
    const [products, setProducts] = useState([])

//Fetch Data
    useEffect(() => {
    fetch("Product.json")  
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);
  



    return (
        <div>
            <div className="p-16">
                <h2 className="text-2xl font-bold">Active Auctions</h2>
                <h3>Discover and bid on extaordinary items</h3>
            </div>
            
            <div className="flex w-full items-start gap-20">
                <div className="border-1 w-[60%] ml-16">
                    <table className='w-full border-2'>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th className='pl-30'>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        products.map((products) => (
                            <Subbody products={products} handlebookmark={handlebookmark}></Subbody>
                        ))
                    }
                </div>
                <div className="w-[26%]  justify-center items-start">
                    <Totalbodyitems bookmark={bookmark} removeItem={removeItem} />
                </div>
            </div>
        </div>
    )
}
 
export default Body;