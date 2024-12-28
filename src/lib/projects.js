import image from "@/app/[locale]/projects/hotel-sidielnoui/assets/img.png";
import hotel_img1 from "@/app/[locale]/projects/hotel-sidielnoui/assets/booking.jpg";
import hotel_img2 from "@/app/[locale]/projects/hotel-sidielnoui/assets/home_fr.jpg";

import event_img1 from "@/app/[locale]/projects/event-plus/assets/home_screen.jpg";
import event_img2 from "@/app/[locale]/projects/event-plus/assets/preference_screen.jpg";

import agency_img1 from "@/app/[locale]/projects/soltanat-eldjamal/assets/home_section.jpg";
import agency_img2 from "@/app/[locale]/projects/soltanat-eldjamal/assets/contact_section.jpg";

export const projects = [
  {
    slug: "hotel-sidielnoui",
    github: "https://github.com/AbderrahmaneOuldgouail/sidi-el-noui",
    live: "https://hotelsidielnoui.dz",
    img1: hotel_img1,
    img2: hotel_img2,
  },
  // {
  //   slug: "event-plus",
  //   github: "",
  //   live: "",
  //   img1: event_img1,
  //   img2: event_img2,
  // },
  {
    slug: "soltanat-eldjamal",
    github: "https://github.com/AbderrahmaneOuldgouail/soltanat-eldjamal",
    live: "https://soltanat-eldjamal.vercel.app/en",
    img1: agency_img1,
    img2: agency_img2,
  },
];

export const imgs = [
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
];
