"use client";

import Marquee from "react-fast-marquee";
import data from '../../../data.json'

const Gallery = () => {
    const marqParams = {
        autoFill: true,
        pauseOnHover: true,
        speed:80, //speed
    };

    return (
        <div className="pb-12 w-full" id="gallery">
            <h2 
                className="text-[35px] text-center py-12 font-bold"
                style={{ color: '#ae59ff' }}
            >
                Memories
            </h2>
            <div className="relative">
                <Marquee {...marqParams} style={{ width: "100vw" }}>
                    {data.gallery.row1.map((src, index) => (
                        <div key={index} className="p-2 h-80 w-96 max-md:h-64 max-md:w-80 max-sm:h-52 max-sm:w-64">
                            <img 
                                src={src.image} 
                                loading="lazy"
                                className="h-full w-full object-cover rounded-3xl"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;
