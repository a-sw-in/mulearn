import data from "../../../data.json"

const About = () => {
    return (
        <div 
            id="about" 
            className="flex flex-col items-center justify-center text-center gap-6 py-[5vh] px-[5%] w-full max-md:gap-[15px] max-md:py-[3vh]"
        >
            <h1 
                className="text-[35px] max-md:text-[2rem] font-bold"
                style={{ color: '#ae59ff' }}
            >
                About Us
            </h1>
            <p 
                className="text-[20px] max-md:text-[17px] max-sm:text-xs max-sm:text-justify text-center"
                style={{ color: 'rgb(66, 66, 66)' }}
            >
                {data.about}
            </p>
        </div>
    );
};

export default About;
