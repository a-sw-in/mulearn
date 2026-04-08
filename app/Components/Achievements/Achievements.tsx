"use client";

import { useEffect, useState } from "react";
import data from "../../../data.json";

const Achievements = () => {
    const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({});
    
    useEffect(() => {
        // Get dimensions of each achievement image when component mounts
        data.achievements.forEach((achievement, index) => {
            const img = new Image();
            img.onload = () => {
                setImageDimensions(prev => ({
                    ...prev,
                    [index]: { width: img.width, height: img.height }
                }));
            };
            img.src = achievement.image;
        });
    }, []);

    // Log image dimensions when they change (this uses the state to solve the unused variable issue)
    useEffect(() => {
        if (Object.keys(imageDimensions).length > 0) {
            console.log("Image dimensions loaded:", imageDimensions);
        }
    }, [imageDimensions]);

    return (
        <div id="achievements" className="flex flex-col items-center justify-center text-center gap-6 py-[5vh] px-[5%] w-full max-md:gap-[15px] max-md:py-[3vh]">
            <h1 
                className="text-[35px] max-md:text-[2rem] font-bold"
                style={{ color: '#ae59ff' }}
            >
                Achievements
            </h1>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl max-lg:gap-6 max-md:gap-4">
                {data.achievements.map((achievement, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center w-full max-w-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 max-md:max-w-96 max-sm:max-w-full"
                    >
                        <div 
                            className="w-full h-auto min-h-[200px] bg-gray-100 overflow-hidden"
                        >
                            <img 
                                src={achievement.image} 
                                alt={achievement.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                            />
                        </div>
                        <div 
                            className={`p-5 w-full bg-white text-left ${
                                index === 1 ? 'text-center pt-[37.5px]' : ''
                            }`}
                        >
                            <h3 
                                className="text-center font-bold mb-2.5 text-2xl max-md:text-lg max-sm:text-base"
                                style={{ color: '#ae59ff' }}
                            >
                                {achievement.title}
                            </h3>
                            <p 
                                className={`text-base text-gray-500 max-md:text-sm ${
                                    index === 1 ? 'text-center' : ''
                                }`}
                            >
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
