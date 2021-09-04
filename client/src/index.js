import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import anime from "animejs";
ReactDOM.render(<App/>, document.getElementById("root"));

anime({
    targets: '.home-text > h3, .avatar-img',
    scaleY: [
      { value: [1, 1], duration: 1200 },
      { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 900 },
      { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 900 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
anime({
    targets: '.avatar-img',
    scaleX: [
      { value: [1, 1], duration: 1200 },
      { value: 1.1, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 900 },
      { value: 1.1, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 900 }
    ],
    easing: 'easeOutElastic(1, .82)',
    loop: true
  });
