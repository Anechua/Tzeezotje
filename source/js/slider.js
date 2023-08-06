import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const renderSlider = new Swiper('.swiper', {
  modules: [Navigation],

  navigation: {
    nextEl: ".slider-button--forward",
    prevEl: ".slider-button--backward",
    disabledClass: "slider-button--disabled"
  },
});

export {renderSlider};
