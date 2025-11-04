import React from 'react';

import { IoIosNotifications } from "react-icons/io";

const Navbar =() =>{


    return(
        <div className="flex justify-center gap-70 p-5 bg-white ">
            <div className="">
                <h1 className="text-2xl">Auction <span className="text-yellow-400">Gallery</span></h1>
                </div>

            <div className=" flex gap-15 text-lg ">
                <button>Home</button>
                <button>Auctions</button>
                <button>Categories</button>
                <button>How to works</button>
            </div>

            <div className="flex  gap-5 items-center ">
                <div><IoIosNotifications size="30"/></div>
                <div><img className="w-10 h-10 rounded-4xl" src="https://i.postimg.cc/KzpsCZ3r/01301499444.jpg" alt=""/></div>

                  

           
            </div>
            

        
    </div>

    )
};

export default Navbar;