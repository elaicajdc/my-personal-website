import React from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const FullPageScroll = () => {

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection className="h-screen">
                    <h1>Screen 1</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;
