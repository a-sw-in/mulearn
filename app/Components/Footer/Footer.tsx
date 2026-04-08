import { Instagram,LinkedIn } from "./assets/svg";
import { ULearnWhite } from "../../assets/svg/svg";
import data from "../../../data.json"

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[3vh] px-[5vw] w-full gap-5 text-white" style={{ backgroundColor: '#ae59ff', paddingTop: '5vh', paddingBottom: '5vh' }}>
            <div className="flex flex-col items-center justify-center gap-[2vh]">
                <ULearnWhite />
                <p>
                    Reach us at{" "}
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </p>
                <div className="flex gap-5">
                    <a target="_blank" href="https://mulearn.org/">
                        µLearn
                    </a>
                    <a target="_blank" href="https://mulearn.org/announcements">
                        Events
                    </a>
                    <a target="_blank" href="https://mulearn.org/gallery">
                        Gallery
                    </a>
                    <a target="_blank" href="https://online.fliphtml5.com/egsqr/tlgc/">
                        Branding
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-6 flex-wrap justify-center">
                <a href={data.linkedIn} className="flex items-center gap-1 text-white font-normal">
                    <LinkedIn />
                    LinkedIn
                </a>
                <a href={data.instagram} className="flex items-center gap-1 text-white font-normal">
                    <Instagram />
                    Instagram
                </a>
            </div>
            <div className="w-full h-0.5" style={{ backgroundColor: '#D4A7FF' }}></div>
            <div className="text-sm text-center flex flex-wrap gap-0.5 items-center justify-center">
                {" "}
                <p>Copyright © 2025. All Rights Reserved.</p>
                <p>µLearn Foundation.</p>
            </div>
        </div>
    );
};

export default Footer;
