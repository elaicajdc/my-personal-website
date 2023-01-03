import React, { useState  } from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { AboutModal } from "../../components/common";
import getImageSize from 'image-size-from-url';

/*
image1: 'https://i.imgur.com/kVh9pOd.png',
            image2: 'https://i.imgur.com/Tm25HvW.png', */
const Home = () => {

    const [open, setOpen] = useState(false);

    const getMeta = (url, callback) => {
        const img = new Image();
        img.src = url;
        img.onload = function() { callback(this.width, this.height); }
    };

    const {widthFirstImage, heightFirstImage} = getImageSize('https://i.imgur.com/kVh9pOd.png');
    const {widthSecondImage, heightSecondImage} = getImageSize('https://i.imgur.com/Tm25HvW.png');

    return (
        <>     
            <div className="flex flex-col 2xl:flex-row md:flex-row sm:flex-col xs:flex-col">
                <div className="font-body text-sm ">
                    <div className="border-0 border-l-8 border-custom-black-100 px-4">
                        <div className="text-3xl">
                            Hello, I'm Elaica
                        </div>
                        <div className="flex flex-row space-x-4 mt-4 pb-4">
                            <a href="/" target="_blank">
                                <FaLinkedin className="h-7 w-7"/>
                            </a>
                            <a href="/" target="_blank">
                                <FaGithub className="h-7 w-7"/>
                            </a>
                            <a href="/" target="_blank">
                                <FaCodepen className="h-7 w-7"/>
                            </a>
                        </div>
                        <div>
                            I'm a full-stack developer that is always eager to boost my skills by consistently giving my best with each program that I create. During my work experiences, I have coded with HTML/CSS, JS, ReactJS, Tailwind and React Hooks for front-end and Java Springboot for back-end and I'm currently self-learning VueJS and Laravel.
                        </div>
                    </div>
                    <div className="mt-10 m-auto p-4 mb-64">
                        <div className="flex flex-row space-x-4">
                            <div className="flex w-full flex-col space-y-4">
                                <div className="relative h-40 rounded-lg bg-custom-red-100 hover:bg-custom-red-200 text-white p-4"
                                onClick={() => {setOpen(true);}}
                                >
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold tracking-wider ">01</span>
                                            <span>ABOUT ME</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-64 rounded-lg bg-custom-gray-100 hover:bg-custom-gray-300 text-white p-4">
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold tracking-wider ">02</span>
                                            <span>SKILLS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col space-y-4">
                                <div className="relative h-72 rounded-lg bg-custom-gray-300 hover:bg-custom-gray-200 text-white p-4">
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold tracking-wider">03</span>
                                            <span>ACHIEVEMENTS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-32 rounded-lg filter bg-custom-gray-200 hover:bg-custom-gray-400 text-white p-4">
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold tracking-wider ">04</span>
                                            <span>CERTIFICATIONS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-7">

                    <div className="-mt-20 m-auto p-4 bg-firstImage w-full h-full bg-contain	hover:bg-secondImage duration-150 ease-out hover:ease-in bg-no-repeat	">
                    </div>
                </div>
            </div>
            <AboutModal 
                classes={"pt-8"}
                open={open}
                setOpen={setOpen}
            />
        </>
    );
	
};

export default Home;