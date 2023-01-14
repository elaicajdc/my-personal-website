import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";
import { Image } from "../../../../utility/constants";

const Achievements = (props) => {
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
                                        <div className="text-3xl tracking-wider absolute bottom-44 -left-24 -rotate-90 before:bg-custom-red-100 before:absolute before:top-0 before:left-80 before:w-full before:h-9"><span className="font-bold text-3xl">03</span> ACHIEVEMENTS</div>
                                        <div className="sm:w-full mx-10 pt-20 pb-24 text-sm text-left text-custom-gray-500 relative space-y-5 flex flex-row px-10 ml-24 select-none">
                                            <img src={Image.circle} className="absolute bottom-10 right-0 w-7/12 opacity-40" alt="circle"/>
                                             <div className="flex flex-col w-full space-y-5">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col w-24">
                                                        <img src="https://media.licdn.com/dms/image/C510BAQE4uKmSuESsFA/company-logo_100_100/0/1519907147828?e=1681344000&v=beta&t=98i_C_7PeWDatS1A0KGpm47zM_v9jYpPrW5LMSfTvwI" className="mt-2 mr-3 w-16" alt="temporary"/>
                                                    </div>
                                                    <div className="flex flex-col pr-10 w-60">
                                                        <span className="text-base font-bold text-black flex flex-row">Nominated for Best Capstone Project</span>
                                                        <span className="flex flex-row">
                                                        FEU Institute of Technology<br/>
                                                        Apr 2022<br/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col w-24">
                                                        <img src="https://media.licdn.com/dms/image/C510BAQE4uKmSuESsFA/company-logo_100_100/0/1519907147828?e=1681344000&v=beta&t=98i_C_7PeWDatS1A0KGpm47zM_v9jYpPrW5LMSfTvwI" className="mt-2 mr-3 w-16" alt="temporary"/>
                                                    </div>
                                                    <div className="flex flex-col w-60">
                                                        <span className="text-base font-bold text-black flex flex-row">Top Performing Student 2018-2022</span>
                                                        <span className="flex flex-row">
                                                        FEU Institute of Technology<br/>
                                                        2018-2022
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col w-24">
                                                        <img src={Image.technofest} className="mt-2 mr-3 w-16" alt="temporary"/>
                                                    </div>
                                                    <div className="flex flex-col pr-10 w-60">
                                                    <span className="text-base font-bold text-black flex flex-row">Technofest Participant</span>
                                                        <span className="flex flex-row">
                                                        FEU Institute of Technology<br/>
                                                        2022<br/>
                                                        Presenter for FunKan- one of the top 3 capstones in IT-WMA
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col w-full space-y-5">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col w-24">
                                                    <img src={Image.bes} className="mt-2 mr-3 w-16" alt="temporary"/>
                                                </div>
                                                <div className="flex flex-col w-60">
                                                    <span className="text-base font-bold text-black flex flex-row">Academic Excellence Awardee</span>
                                                    <span className="flex flex-row">
                                                    Bulacan Ecumenical School<br/>
                                                    Mar 2018<br/>
                                                    With Honors
                                                    </span>
                                                </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col w-24">
                                                        <img src="https://media.licdn.com/dms/image/C510BAQE4uKmSuESsFA/company-logo_100_100/0/1519907147828?e=1681344000&v=beta&t=98i_C_7PeWDatS1A0KGpm47zM_v9jYpPrW5LMSfTvwI" className="mt-2 mr-3 w-16" alt="temporary"/>
                                                    </div>
                                                    <div className="flex flex-col pr-10 w-60">
                                                        <span className="text-base font-bold text-black flex flex-row">Academic Scholarship</span>
                                                        <span className="flex flex-row">
                                                        FEU Institute of Technology<br/>
                                                        2018-2021
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

export default Achievements;                                                                                                      