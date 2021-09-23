import "./style.css";

import type { VideoJsPlayerOptions } from "video.js";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const videoElt: HTMLVideoElement | null = htmlNode.querySelector("video");

const options: VideoJsPlayerOptions = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  sources: [
    {
      src: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
      type: "video/mp4",
    },
  ],
  poster: "https://sveltejs.github.io/assets/caminandes-llamigos.jpg",
};

if (videoElt) {
  videojs(videoElt, options);
}
