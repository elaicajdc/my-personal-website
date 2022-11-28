import React, { Fragment } from "react";

const Base = (props) => {
    const { main: Component } = props;


    return (
        <Fragment>
            <Component />
        </Fragment>
    );
};

export default Base;