import React from "react";
import Navbar from "./navbar";
const BasicLayout = (props) => {
    const { children } = props;
    return (
        <>
            <div className="flex flex-col h-screen w-full">
                <Navbar />
                <main className="container flex-1 py-8 m-auto">
                    <div className="px-4 mx-10 mt-20 flex pb-8">
                        <Content children={children} />
                    </div>
                </main>
            </div>
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