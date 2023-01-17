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
  width: 800px;
  height: 100%;
  background-image: url(${Image.artboardgif});
  background-size: cover;
  background-position: center;
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
        <Content title={"ARTBOARD"} description={"ArtBoard is a social media website for artists that was developed using HTML/CSS and JavaScript. Later on, it was given a backend using JavaScript and PHP. For this project, I was the UI/UX designer, and one of the front-end/back-end developers."} link={'https://art-board.netlify.com'}/>
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
