import React, { useState, useEffect } from "react";
import { FaBehance, FaGithub, FaCodepen } from "react-icons/fa";
import { AboutModal, AchievementsModal, CertificationsModal, ExperienceModal } from "../../components/common";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import Slider from "../../components/slider";
import {Image} from "../../utility/constants";

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [experienceOpen, setExperienceOpen] = useState(false);
    const [certificationsOpen, setCertificationsOpen] = useState(false);
    const [achievementsOpen, setAchievementsOpen] = useState(false);
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setTimeout( () => {
            setLoading(false);
        }, 3600);
        setTimeout( () => {
            setAnimation("1");
        }, 4000);
    },[])

    return (
        <>
            <div className={`fixed w-full h-full bg-custom-red-100 z-50 left-0 right-0 top-0 bottom-0 flex items-center transition ease-in-out ${loading === true ? `block` : `hidden`} duration-300	`}>
                <img src={`${Image.loading}`} className="m-auto w-28" alt="loading"/>
            </div>
            <Fullpage>
                <FullPageSections className=" m-auto">
                    <FullpageSection className="container m-auto h-screen justify-center align-center flex grow sectionone">
                        <div className="flex flex-col 2xl:flex-row md:flex-row sm:flex-col xs:flex-col h-auto py-24 md:py-36 px-6 md:px-20">
                            <div className="font-body text-sm">
                                <div className={`relative border-0 border-l-8 border-custom-black-100 px-4 before:bg-white before:-ml-2 before:w-50 before:absolute before:w-full before:h-52 before:-left-full before:z-50`}>
                                    <div className={`relative transition duration-700 ease-in-out  ${animation === "" ? `-translate-x-full text-transparent` : `translate-x-0`}`}>
                                        <div className="text-3xl font-bold">
                                            Hello, I'm Elaica
                                        </div>
                                        <div className="flex flex-row space-x-4 mt-4 pb-4">
                                            <a href="https://github.com/elaicajdc">
                                                <FaGithub className="h-7 w-7 hover:text-custom-red-200"/>
                                            </a>
                                            <a href="https://codepen.io/elaicajdc">
                                                <FaCodepen className="h-7 w-7 hover:text-custom-red-200"/>
                                            </a>
                                            <a href="https://www.behance.net/elaicadc">
                                                <FaBehance className="h-7 w-7 hover:text-custom-red-200"/>
                                            </a>
                                        </div>
                                        <div>
                                            I'm a full-stack developer that is always eager to boost my skills by consistently giving my best with each program that I create. During my work experiences, I have coded with HTML/CSS.
                                        </div>
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                                <div className="mt-10 m-auto p-4 mb-64">
                                    <div className="flex flex-row space-x-4">
                                        <div className="flex w-full flex-col space-y-4">
                                            <div
                                                className="relative lg:h-40 md:h-40 sm:h-24 h-24 rounded-lg bg-custom-red-100 hover:bg-custom-red-200 text-white p-4"
                                                onClick={() => {setAboutOpen(true);}}
                                            >
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-3xl font-bold tracking-wider ">01</span>
                                                        <span className="text-xs md:text-md">ABOUT ME</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div 
                                                className="relative lg:h-64 md:h-64 sm:h-36 h-36 rounded-lg bg-custom-gray-100 hover:bg-custom-gray-300 text-white p-4"
                                                onClick={() => {setExperienceOpen(true);}}
                                            >
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-3xl font-bold tracking-wider ">02</span>
                                                        <span className="text-xs md:text-md">EXPERIENCE</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-col space-y-4">
                                            <div 
                                                className="relative lg:h-72 md:h-72 sm:h-40 h-40 rounded-lg bg-custom-gray-300 hover:bg-custom-gray-200 text-white p-4"
                                                onClick={() => {setAchievementsOpen(true);}}
                                            >
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-3xl font-bold tracking-wider">03</span>
                                                        <span className="text-xs md:text-md">ACHIEVEMENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div 
                                                className="relative lg:h-32 md:h-32 sm:h-20 h-20 rounded-lg filter bg-custom-gray-200 hover:bg-custom-gray-400 text-white p-4"
                                                onClick={() => {setCertificationsOpen(true);}}
                                            >
                                                <div className="absolute bottom-4 left-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-3xl font-bold tracking-wider ">04</span>
                                                        <span className="text-xs md:text-md">CERTIFICATIONS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mx-7 hidden lg:block">
                                <div className="m-auto py-40 -mt-28 bg-firstImage w-full h-screen object-scale-down bg-center hover:bg-center bg-contain hover:bg-secondImage duration-150 ease-out hover:ease-in bg-no-repeat	">
                                </div>
                            </div>
                        </div>
                    </FullpageSection>
                    
                    <FullpageSection className="h-screen justify-center align-center flex grow sectiontwo">
                        <Slider />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
            
            <AboutModal 
                classes={"pt-8"}
                open={aboutOpen}
                setOpen={setAboutOpen}
            />

            <AchievementsModal 
                classes={"pt-8"}
                open={achievementsOpen}
                setOpen={setAchievementsOpen}
            />

            <CertificationsModal 
                classes={"pt-8"}
                open={certificationsOpen}
                setOpen={setCertificationsOpen}
            />

            <ExperienceModal 
                classes={"pt-8"}
                open={experienceOpen}
                setOpen={setExperienceOpen}
            />
        </>
    );
	
};

export default Home;