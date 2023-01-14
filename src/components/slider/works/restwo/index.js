import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../../content";
import { Image } from "../../../../utility/constants";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: #fff;
  justify-content: center;
`;

const Images = styled.div`
  width: 800px;
  height: 100%;
  background-image: url(${Image.test});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateY(100%)", opacity: 0 };

const forwardStyleContent = { transform: "translateY(100%)", opacity: 0 };
const backwardStyleContent = { transform: "translateY(-100%)", opacity: 0 };

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"RESTWO"} description={"For this thesis project, I am assigned as the Project Manager, UI/UX designer, and one of the front-end/back-end developers."} link={'/'}/>
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Images className="hidden lg:block xl:block"/>
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
