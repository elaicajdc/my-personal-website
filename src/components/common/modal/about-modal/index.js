import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";
import { Image } from "../../../../utility/constants";


const AboutModal = (props) => {
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
                                <Dialog.Panel className="w-full max-w-4xl h-modal transform overflow-hidden rounded-md bg-white text-left align-middle shadow-md transition-all">
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
                                        
                                        <div className="text-3xl tracking-wider absolute bottom-36 -left-10 -rotate-90 before:bg-custom-red-100 before:absolute before:top-0 before:left-60 before:w-full before:h-10"><span className="font-bold text-4xl">01</span> ABOUT ME</div>
                                        <div className="sm:w-full mx-10 py-20 text-sm text-left text-custom-gray-500 relative space-y-5 flex flex-col px-10 ml-24 select-none">
                                            <img src={Image.circle} className="absolute bottom-10 right-0 w-7/12 opacity-40" alt="circle"/>
                                            <div className="flex flex-row">
                                                I strive to create clean and efficient code and always have great interest in bringing unique concepts to life through our screens. 
                                            </div>
                                            <div className="text-base font-bold text-black flex flex-row">EDUCATION</div>
                                            <div className="flex flex-row">
                                                <div className="flex flex-col">
                                                    <img src={Image.feutech} className="mt-2 mr-3" alt="temporary"/>
                                                </div>
                                                <div className="flex flex-col pr-4">
                                                    <span className="text-base font-bold text-black flex flex-row">FEU Institute of Technology</span>
                                                    <span className="flex flex-row">
                                                        2023<br/>
                                                        Bachelor of Science in Information Technology with specialization in Web and Mobile Applications<br/>
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <img src={Image.cisco} className="mt-2 mr-3" alt="temporary"/>
                                                </div>
                                                <div className="flex flex-col pr-4">
                                                    <span className="text-base font-bold text-black flex flex-row">Cisco Networking Academy</span>
                                                    <span className="flex flex-row">
                                                    Apr 2022<br/>
                                                    Computer and Information Systems Security/Information Assurance<br/>
                                                    </span>
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

export default AboutModal;                                                                                                      