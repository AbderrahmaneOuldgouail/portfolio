import image from "@/app/[locale]/projects/hotel-sidielnoui/assets/img.png";
import hotel_img1 from "@/app/[locale]/projects/hotel-sidielnoui/assets/preview.png";

import event_img1 from "@/app/[locale]/projects/event-plus/assets/preview.png";

import agency_img1 from "@/app/[locale]/projects/soltanat-eldjamal/assets/preview.png";

export const projects = [
  {
    slug: "hotel-sidielnoui",
    github: "https://github.com/AbderrahmaneOuldgouail/sidi-el-noui",
    live: "https://hotelsidielnoui.dz",
    img1: hotel_img1,
  },
  {
    slug: "event-plus",
    github: "",
    live: "",
    img1: event_img1,
  },
  {
    slug: "soltanat-eldjamal",
    github: "https://github.com/AbderrahmaneOuldgouail/soltanat-eldjamal",
    live: "https://soltanat-eldjamal.vercel.app/en",
    img1: agency_img1,
  },
];

export const imgs = [
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
];
