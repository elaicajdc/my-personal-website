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
  background: #dc3660;
  justify-content: center;
`;

const Images = styled.div`
  width: 940px;
  height: 100%;
  background-image: url(${Image.todolist});
  background-size: cover;
  background-position: center;
  transform: scaleX(0.85);
  margin-right: -6vw;
`;

const forwardStyleImage = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateY(100%)", opacity: 0 };

const forwardStyleContent = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleContent = { transform: "translateY(100%)", opacity: 0 };

const WithImage = () => (
  <Main>
    <Wrapper>
      <ActiveItem
        forwardStyle={forwardStyleContent}
        backwardStyle={backwardStyleContent}
      >
        <Content title={"TO DO LIST"} description={"This mini todo list project with CRUD operations was made using ReactJS, Tailwind, and Hooks."} link={'https://github.com/elaicajdc/React-Tailwind-TODO'}/>
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
