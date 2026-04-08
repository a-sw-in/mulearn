import data from "../../../data.json";

const Events = () => {
  return (
    <div className="w-full py-16 px-8 flex flex-col justify-center gap-8 max-lg:py-8">
      <h2 
        className="text-center text-4xl font-bold"
        style={{ color: '#ae59ff' }}
      >
        Our Event Journey
      </h2>
      <div className="flex w-full items-center justify-center gap-10 max-lg:flex-col max-lg:gap-6">
        {/* Large Card */}
        <div className="flex flex-col items-center justify-center max-w-xl w-1/2 max-lg:w-full">
          <img 
            src={data["events"][0].img} 
            alt="" 
            className="w-full rounded-2xl object-contain mb-6"
          />
          <div className="flex items-center gap-6 w-full shadow-lg p-6 rounded-2xl max-lg:flex-col max-lg:text-center">
            <div 
              className="flex flex-col gap-2 uppercase min-w-fit border-r-4 pr-6 max-lg:border-r-0 max-lg:border-b-4 max-lg:pb-4"
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

        {/* Small Cards */}
        <div className="flex flex-col gap-4 w-1/2 max-lg:w-full">
          {data.events.slice(1).map((event, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 shadow-lg p-4 rounded-2xl max-md:flex-col max-md:text-center"
            >
              <img 
                src={event.img} 
                alt="" 
                className="h-28 w-28 rounded-2xl object-cover flex-shrink-0 max-md:h-24 max-md:w-24"
              />
              <div className="flex items-center gap-3 flex-1 border-r-4 pr-4 max-md:border-r-0 max-md:border-b-4 max-md:pb-4 max-md:flex-col" style={{ borderColor: '#d6abfe' }}>
                <div className="flex flex-col gap-1 uppercase min-w-fit">
                  <span className="text-lg font-bold max-md:text-base">{event.month}</span>
                  <span className="text-lg font-bold max-md:text-base">{event.date}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-base max-md:text-sm">{event.head}</strong>
                  <span className="text-sm max-md:text-xs">{event.para}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
