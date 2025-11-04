import React from 'react';


const Footer =() =>{


    return(
        <div className='items-center  text-center p-10 bg-gray-100 text-black gap-5  flex flex-col'>

        <h1 className="text-2xl">Auction <span className='text-yellow-400'>Gallery</span></h1>

        <h2>Bid. Win. OWn.</h2>
        <div className="flex gap-10 text-lg">
            <button>Home</button>
            <button>Auctions</button>
            <button>Categories</button>
            <button>How to works</button>
        </div>
        <h3>© 2025 Auctions Hub. All right reserved</h3>
        </div>
    );
};

export default Footer;