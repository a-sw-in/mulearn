import data from "../../../data.json";

const Events = () => {
  return (
    <div className="w-full py-16 px-8 flex flex-col justify-center gap-8 max-lg:py-8" style={{marginTop:'0px'}}>
      <h2 
        className="text-center text-4xl font-bold"
        style={{ color: '#ae59ff' }}
      >
        Our Event Journey
      </h2>
      <div className="flex w-full items-center justify-center gap-20 max-lg:flex-col max-lg:gap-10">
        {/* Large Card */}
        <div className="flex flex-col mt-[5vh] items-center justify-center justify-center max-w-md max-lg:w-full" style={{ transform: 'scale(1.10)' }}>
          <div className="flex flex-col w-full rounded-2xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src={data["events"][0].img} 
              alt="" 
              className="w-full h-auto p-6 object-contain"
              style={{ borderRadius: '7%' }}
            />
            <div className="flex items-center justify-start gap-6 p-6">
              <div 
                className="flex flex-col gap-2 uppercase min-w-fit border-r-4 pr-6"
                style={{ borderColor: '#d6abfe' }}
              >
                <span className="text-3xl font-bold max-lg:text-2xl">{data["events"][0].month}</span>
                <span className="text-2xl font-bold max-lg:text-xl">{data["events"][0].date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="text-xl max-lg:text-lg">{data["events"][0].head}</strong>
                <span className="text-base max-lg:text-sm">{data["events"][0].para}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Cards */}
        <div className="flex flex-col mt-[10vh] gap-3 w-1/2 max-lg:w-fit max-lg:items-center max-lg:max-w-md max-md:w-fit max-md:max-w-full max-md:items-stretch" style={{ transform: 'scale(1.10)' }}>
          {data.events.slice(1).map((event, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-white px-6  rounded-2xl w-full h-auto max-md:h-auto"
              style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1 uppercase min-w-fit">
                  <span className="text-2xl font-bold max-md:text-lg">{event.month}</span>
                  <span className="text-2xl font-bold max-md:text-lg">{event.date}</span>
                </div>
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#d6abfe' }}></div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <strong className="text-lg max-md:text-base">{event.head}</strong>
                <span className="text-base max-md:text-sm">{event.para}</span>
              </div>
              <img 
                src={event.img} 
                alt="" 
                className="h-32 w-32 object-cover flex-shrink-0 rounded-lg max-md:h-28 max-md:m-2 max-md:w-28"
                style={{ borderRadius: '1rem' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
