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
  background-image: url(${Image.funkangif});
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
        <Images className="w-screen bg-cover bg-norepeat h-2/6 md:w-[800px] lg:hidden xl:hidden"/>
        <Content title={"FUNKAN"} description={"FunKan is a travel package reservation system that was made for an Indonesian travel agency. For this thesis project, I am assigned as the Project Manager, UI/UX designer, and one of the front-end/back-end developers."} link={'https://funkan.net'}/>
      </ActiveItem>

      <ActiveItem
        forwardStyle={forwardStyleImage}
        backwardStyle={backwardStyleImage}
      >
        <Images className="hidden h-full md:w-[800px] lg:block xl:block"/>
      </ActiveItem>
    </Wrapper>
  </Main>
);

export default WithImage;
