import React from "react";
import Navbar from "./navbar";
import OwlCarousel from "./../owl-carousel";
const BasicLayout = (props) => {
    const { children } = props;
    return (
        <>
            <div className="flex flex-col h-screen w-full font-body">
                <Navbar />
                <main className="container flex-1 py-8 m-auto">
                    <div className="px-4 mx-10 mt-20 flex pb-8">
                        <Content children={children} />
                    </div>
                </main>
            </div>
            
            {children.props.main.name == "Home" &&
                <OwlCarousel />
            }
        </>
    );
};

const Content = (props) => {
    const { children } = props;
    return (
        <>
            <main className="flex-1 justify-center">
                {
                    children
                }
            </main>
        </>
    );
};

export default BasicLayout;