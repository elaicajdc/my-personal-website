// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/index.js
import React from "react";

import { Carousel } from "react-scroll-slider";

import Artboard from "./works/artboard";
import Funkan from "./works/funkan";
import Todo from "./works/todo";
import Miniprojects from "./works/mini";

const Slider = () => (
  <Carousel>
    <Artboard />
    <Miniprojects />
    <Todo />
    <Funkan />
  </Carousel>
);

export default Slider;
