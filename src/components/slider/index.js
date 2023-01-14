// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/index.js
import React from "react";

import { Carousel } from "react-scroll-slider";

import Funkan from "./works/funkan";
import Restwo from "./works/restwo";

const Slider = () => (
  <Carousel>
    <Funkan />
    <Restwo />
  </Carousel>
);

export default Slider;
