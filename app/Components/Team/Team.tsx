import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
  // Desktop styles
  const teamCardBase = "flex items-center justify-center flex-col gap-[20px] absolute h-[20rem] w-[15rem] max-[780px]:w-[12.3rem] max-[670px]:w-[10rem]";
  const teamCardSmall = "flex items-center justify-center flex-col gap-[15px] absolute h-[16rem] w-[12rem] max-[780px]:w-[10rem] max-[670px]:w-[8.5rem]";
  
  // Medium screen styles
  const teamCardMedium = "flex items-center justify-center flex-col gap-[15px] h-[16rem] w-[12rem]";
  const imgStyleMedium = "object-contain relative align-top rounded-full h-[10rem] w-[10rem]";
  const nameStyleMedium = "text-black flex font-bold h-fit justify-center w-fit text-[1rem]";
  const designationStyleMedium = "flex text-[0.9rem] font-medium h-fit justify-center w-fit";
  
  // Mobile screen styles
  const teamCardMobile = "flex items-center justify-center flex-col gap-[10px] h-[12rem] w-[8.5rem]";
  const imgStyleMobile = "object-contain relative align-top rounded-full h-[7rem] w-[7rem]";
  const nameStyleMobile = "text-black flex font-bold h-fit justify-center w-fit text-[0.8rem]";
  const designationStyleMobile = "flex text-[0.65rem] font-medium h-fit justify-center w-fit";
  
  const imgContainer = "rounded-full shrink-0 flex w-full items-center justify-center";
  const imgStyle = "object-contain relative align-top rounded-full h-[15rem] w-[15rem] max-[1200px]:h-[12rem] max-[1200px]:w-[12rem] max-[780px]:h-[10rem] max-[780px]:w-[10rem] max-[670px]:h-[8rem] max-[670px]:w-[8rem]";
  const imgStyleSmall = "object-contain relative align-top rounded-full h-[12rem] w-[12rem] max-[1200px]:h-[10rem] max-[1200px]:w-[10rem] max-[780px]:h-[8.5rem] max-[780px]:w-[8.5rem] max-[670px]:h-[7rem] max-[670px]:w-[7rem]";
  const nameContainer = "h-fit relative w-full flex flex-col items-center";
  const nameStyle = "text-black flex font-bold h-fit justify-center w-fit text-[1.5rem] max-[780px]:text-[1rem] max-[670px]:text-[0.8rem]";
  const nameStyleSmall = "text-black flex font-bold h-fit justify-center w-fit text-[1.2rem] max-[780px]:text-[0.9rem] max-[670px]:text-[0.7rem]";
  const designationStyle = "flex text-[1.3rem] font-medium h-fit justify-center w-fit max-[780px]:text-[0.85rem] max-[670px]:text-[0.7rem]";
  const designationStyleSmall = "flex text-[1rem] font-medium h-fit justify-center w-fit max-[780px]:text-[0.7rem] max-[670px]:text-[0.6rem]";

  // Desktop layout: 4 + 5
  const members = [
    { data: data.team.campusLead, title: "Campus Lead", style: { marginTop: "-30px", top: "0", left: "5%" }, isSmall: false },
    { data: data.team.campusCoLead, title: "Campus Co-Lead", style: { marginTop: "-50px", top: "0", left: "28%" }, isSmall: false },
    { data: data.team.igLead, title: "IG Manager", style: { marginTop: "-60px", top: "0", left: "50%" }, isSmall: false },
    { data: data.team.operationLead, title: "Operation Lead", style: { marginTop: "-10px", top: "0", left: "74%" }, isSmall: false },
    { data: data.team.technicalLead, title: "Technical Lead", style: { marginTop: "350px", top: "100%", left: "2%" }, isSmall: true },
    { data: data.team.mediaLead, title: "Creative Lead", style: { marginTop: "380px", top: "100%", left: "22%" }, isSmall: true },
    { data: data.team.marketingLead, title: "Marketing Lead", style: { marginTop: "380px", top: "100%", left: "42%" }, isSmall: true },
    { data: data.team.communityLead, title: "Community Lead", style: { marginTop: "380px", top: "100%", left: "62%" }, isSmall: true },
    { data: data.team.contentLead, title: "Content Lead", style: { marginTop: "380px", top: "100%", left: "82%" }, isSmall: true },
  ];

  // Medium layout: 3 + 3 + 3
  const membersMedium = [
    { data: data.team.campusLead, title: "Campus Lead", row: 0 },
    { data: data.team.campusCoLead, title: "Campus Co-Lead", row: 0 },
    { data: data.team.igLead, title: "IG Manager", row: 0 },
    { data: data.team.operationLead, title: "Operation Lead", row: 1 },
    { data: data.team.technicalLead, title: "Technical Lead", row: 1 },
    { data: data.team.mediaLead, title: "Creative Lead", row: 1 },
    { data: data.team.marketingLead, title: "Marketing Lead", row: 2 },
    { data: data.team.communityLead, title: "Community Lead", row: 2 },
    { data: data.team.contentLead, title: "Content Lead", row: 2 },
  ];

  // Mobile layout: 2 + 2 + 2 + 3
  const membersMobile = [
    { data: data.team.campusLead, title: "Campus Lead", row: 0 },
    { data: data.team.campusCoLead, title: "Campus Co-Lead", row: 0 },
    { data: data.team.igLead, title: "IG Manager", row: 1 },
    { data: data.team.operationLead, title: "Operation Lead", row: 1 },
    { data: data.team.technicalLead, title: "Technical Lead", row: 2 },
    { data: data.team.mediaLead, title: "Creative Lead", row: 2 },
    { data: data.team.marketingLead, title: "Marketing Lead", row: 3 },
    { data: data.team.communityLead, title: "Community Lead", row: 3 },
    { data: data.team.contentLead, title: "Content Lead", row: 4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[100px] w-full min-h-[700px] mt-[3vh] max-[1200px]:mt-[50px] max-[670px]:mt-[50px]" id="team">
      <h1 className="text-[#ad58ff] text-[2.5rem] mt-[30px] font-bold max-[1200px]:text-[2rem]">Our Team</h1>
      
      {/* Desktop Layout: 4 + 5 */}
      <div className="relative h-[85vh] min-h-[650px] max-[1500px]:h-[95vh] max-[1500px]:-mb-[40px] max-[1200px]:hidden max-[900px]:h-[85vh] max-[900px]:-mb-[100px] max-[900px]:z-0 max-[780px]:h-[100vh] max-[780px]:-mb-[120px] max-[670px]:h-[180vh] max-[670px]:-mb-[100px] w-full">
        <div className="w-full relative flex flex-col gap-[260px] max-[1500px]:gap-[240px] max-[1200px]:gap-[260px] max-[780px]:gap-[220px] max-[670px]:gap-[200px]">
          <img className="w-full h-auto block" src={line.src} alt="" loading="lazy" />
          <img className="w-full h-auto block max-[670px]:hidden" src={line2.src} alt="" loading="lazy" />
          <img className="w-full h-auto hidden max-[1200px]:block max-[670px]:!hidden" src={line.src} alt="" loading="lazy" />
          <img className="w-full h-auto hidden" src={line2.src} alt="" loading="lazy" />
          <img className="w-full h-auto block" src={line.src} alt="" loading="lazy" />
        </div>
        <div className="flex flex-wrap absolute top-0 items-center justify-center w-full">
          {members.map((member, i) => (
            <div key={i} className={member.isSmall ? teamCardSmall : teamCardBase} style={member.style}>
              <div className={imgContainer}>
                <img className={member.isSmall ? imgStyleSmall : imgStyle} src={member.data.image} loading="lazy" />
              </div>
              <div className={nameContainer}>
                <div className={member.isSmall ? nameStyleSmall : nameStyle}>{member.data.name}</div>
                <div className={member.isSmall ? designationStyleSmall : designationStyle} style={{ color: "#ad58ff", top: "2rem" }}>
                  {member.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Layout: 3x3 with lines */}
      <div className="hidden max-[1200px]:flex max-[670px]:hidden flex-col items-center justify-center gap-[60px] w-full">
        {[0, 1, 2].map((rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center justify-center w-full">
            {/* Line image */}
            <img 
              className="w-full h-auto mb-[30px]" 
              src={rowIndex === 1 ? line2.src : line.src} 
              alt="" 
              loading="lazy" 
            />
            {/* Team members in row */}
            <div className="flex items-center justify-center gap-[50px] w-full px-[20px]">
              {membersMedium.filter(m => m.row === rowIndex).map((member, i) => (
                <div key={i} className={teamCardMedium} style={{ marginTop: "-150px" }}>
                  <div className={imgContainer}>
                    <img className={imgStyleMedium} src={member.data.image} loading="lazy" />
                  </div>
                  <div className={nameContainer}>
                    <div className={nameStyleMedium}>{member.data.name}</div>
                    <div className={designationStyleMedium} style={{ color: "#ad58ff" }}>
                      {member.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout: 2+2+2+3 with lines */}
      <div className="hidden max-[670px]:flex flex-col items-center justify-center gap-[40px] w-full">
        {[0, 1, 2, 3 ,4].map((rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center justify-center w-full">
            {/* Line image */}
            <img 
              className="w-full h-auto mb-[3px]" 
              src={rowIndex === 3||rowIndex === 1 ? line2.src : line.src} 
              alt="" 
              loading="lazy" 
            />
            {/* Team members in row */}
            <div className="flex items-center justify-center gap-[95px] w-full px-[15px] flex-wrap">
              {membersMobile.filter(m => m.row === rowIndex).map((member, i) => (
                <div key={i} className={teamCardMobile} style={{ marginTop: "-90px" }}>
                  <div className={imgContainer}>
                    <img className={imgStyleMobile} src={member.data.image} loading="lazy" />
                  </div>
                  <div className={nameContainer}>
                    <div className={nameStyleMobile}>{member.data.name}</div>
                    <div className={designationStyleMobile} style={{ color: "#ad58ff" }}>
                      {member.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
