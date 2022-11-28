import React from "react";

const BasicLayout = (props) => {
    const { children } = props;
    return (
        <div className="flex h-screen">
            <div className="fixed inset-0 flex bg-custom-black-900 font-body overflow-y-auto scrollbar-hide">
                <main className="flex-1 h-5/6">
                    <div className="max-w-7xl mx-auto px-4 mt-20 flex pb-8">
                        <Content children={children} />
                    </div>
                </main>
            </div>
        </div>
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