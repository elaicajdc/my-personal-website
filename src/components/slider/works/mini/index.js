import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../../content";
import { Image } from "../../../../utility/constants";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: url("${Image.graphic_waves}") no-repeat fixed center;
  background-size: cover;
  justify-content: center;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: #0000;
  justify-content: center;
`;


const Images = styled.div`
  width: 800px;
  height: 100%;
  background-image: url(${Image.miniproj});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateY(100%)", opacity: 0 };

const forwardStyleContent = { transform: "translateY(100%)", opacity: 0 };
const backwardStyleContent = { transform: "translateY(-100%)", opacity: 0 };

const WithImage = () => (
  <Main>
    <Wrapper>
      <ActiveItem
        forwardStyle={forwardStyleContent}
        backwardStyle={backwardStyleContent}
      >
        <Content title={"MINI PROJECTS"} description={"Check out my mini projects in my github profile. Some that I've accomplished is a lucky 9 game and a rock paper and scissors game using JS"} link={'https://github.com/elaicajdc'}/>
      </ActiveItem>

      <ActiveItem
        forwardStyle={forwardStyleImage}
        backwardStyle={backwardStyleImage}
      >
        <Images className="hidden lg:block xl:block"/>
      </ActiveItem>
    </Wrapper>
  </Main>
);

export default WithImage;
