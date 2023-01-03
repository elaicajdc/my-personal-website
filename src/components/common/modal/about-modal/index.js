import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";

const AboutModal = (props) => {
    const { icon, open, setOpen } = props;

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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                                    <div className="hidden sm:block absolute top-0 right-0 ml-9 mt-6 mr-7">
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
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold tracking-wider ">01</span>
                                            <span>ABOUT ME</span>
                                        </div>
                                    </Dialog.Title>
                                    <div className="mx-auto pt-16 pb-3 flex items-center justify-center ">
                                        {icon}
                                    </div>
                                    <div className=" mx-20 pb-9">
                                        <p className="text-sm text-custom-gray-500 flex items-center justify-center text-center">
                                            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" alt="temporary"/>
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-row-reverse border-t border-custom-gray-200">
                                        <div className="h-10 w-24 mt-3.5 mb-3.5 mr-7">
                                            <button
                                                type="button"
                                                onClick={closeModal}
                                                className= " hover:text-white hover:bg-custom-yellow-500 cursor-pointer bg-custom-yellow-900 text-sm font-medium text-white cursor-default select-none relative inline-flex h-full w-full justify-center items-center rounded-md border border-transparent"
                                            >
											Close
                                            </button>
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