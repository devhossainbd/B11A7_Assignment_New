import React from 'react';


const Bannar =() => {





    return (
        <div className="relative w-full h-96 flex items-center justify-center">
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://i.postimg.cc/qBDvxYQ8/Banner-min.jpg"
                alt=""
            />
            <div className="relative z-10 flex flex-col  justify-center w-full">
                
                <h1 className="text-4xl text-white font-bold  pl-20">Bid on Unique Items from <br/>
                Around the World</h1>
                <h2 className="text-2xl text-white p-5 pl-20">
                    Discover rare collectibles, luxury goods, and vintag <br/>
                    Treasures in our curated auctions
                </h2>
            <div className="pl-20 pt-5">
            <button className="bg-white text-black p-3  text-lg font-bold rounded-3xl">Explore Auction</button></div>

            </div>
        </div>
    );
};

export default Bannar;