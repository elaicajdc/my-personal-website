import React from "react";
import { Base, BasicLayout } from "../components/container";

const PublicRoute = (props) => {
    const { main } = props;

    return (
        <BasicLayout>
            <Base main={main} />
        </BasicLayout> 
    );
};

export default PublicRoute;
