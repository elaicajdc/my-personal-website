import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";
import { Image } from "../../../../utility/constants";

const Experience = (props) => {
    const { open, setOpen } = props;

    function closeModal() {
        setOpen(false);
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10 font-body" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
  
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-8 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full pb-10 max-w-4xl h-modal transform overflow-hidden rounded-md bg-white text-left align-middle shadow-md transition-all">
                                    <div className="hidden sm:block absolute top-0 right-0 ml-9 mt-6 mr-7 z-50">
                                        <button
                                            type="button"
                                            className="h-7 w-7 flex text-gray-400 bg-custom-gray-100 justify-center items-center text-center"
                                            onClick={() => closeModal()}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="ml-9 mt-6 text-base tracking-tighter font-bold text-black"
                                    >
                                    </Dialog.Title>
                                    <div className="flex flex-row relative overflow-x-auto">
                                        
                                        <div className="text-3xl tracking-wider absolute bottom-28 -left-16 -rotate-90 before:bg-custom-red-100 before:absolute before:top-0 before:left-72 before:w-full before:h-10"><span className="font-bold text-4xl">02</span> EXPERIENCE</div>
                                        <div className="sm:w-full mx-10 py-20 text-sm text-left text-custom-gray-500 relative space-y-5 flex flex-col px-10 ml-24 select-none">
                                            <img src={Image.circle} className="absolute bottom-0 right-0 w-6/12 opacity-40" alt="circle"/>
                                            <div className="flex flex-col space-y-10">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col">
                                                        <img src="https://media.licdn.com/dms/image/C560BAQEcFCYxCPhOHQ/company-logo_100_100/0/1617701642757?e=1681948800&v=beta&t=t5JpRALjBEEVtHPEjywkxVoi_yWRIwaqrKdXKhdq7Hg" className="mt-2 mr-3 w-72" alt="hooli"/>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-base font-bold text-black flex flex-row">Hooli Software</span>
                                                        <span className="flex flex-row">
                                                            Software Engineer Intern<br/>
                                                            Apr 2022 - Oct 2022<br/>
                                                            As a software engineer intern, I did front-end development using ReactJS and Tailwind and back-end development using Java Springboot. I was tasked with data integration and creation of page layouts, components, user verifications, and APIs<br/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col">
                                                        <img src="https://pbs.twimg.com/profile_images/1173471139911221248/mZFiQFW6_400x400.jpg" className="mt-2 mx-4 w-20" alt="hooli"/>
                                                    </div>
                                                    <div className="flex flex-col pl-2">
                                                        <span className="text-base font-bold text-black flex flex-row">Google Developer Student Clubs</span>
                                                        <span className="flex flex-row">
                                                            Front-end Development Intern<br/>
                                                            Jan 2022 - Apr 2022<br/>
                                                            Utilized AJAX, Bootstrap, and jQuery and created a page layout for GDSC FEU Tech Official Website.<br/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Experience;                                                                                                      