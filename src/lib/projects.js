import image from "@/app/[locale]/projects/hotel-sidielnoui/assets/img.png";
import hotel_img1 from "@/app/[locale]/projects/hotel-sidielnoui/assets/preview.png";
import event_img1 from "@/app/[locale]/projects/event-plus/assets/preview.png";
import soltanat_eldjamal_preview from "@/app/[locale]/projects/soltanat-eldjamal/assets/preview.png";
import shose_store_preview from "@/app/[locale]/projects/shose-store/assets/preview.png";
import job_search_preview from "@/app/[locale]/projects/job-search/assets/preview.png";

export const projects = [
  {
    slug: "hotel-sidielnoui",
    github: "https://github.com/AbderrahmaneOuldgouail/sidi-el-noui",
    live: "https://hotelsidielnoui.dz",
    img1: hotel_img1,
  },
  {
    slug: "event-plus",
    github: "https://github.com/duobix-software/mobile-app-eventplus",
    live: "",
    img1: event_img1,
  },
  {
    slug: "soltanat-eldjamal",
    github: "https://github.com/AbderrahmaneOuldgouail/soltanat-eldjamal",
    live: "https://soltanat-eldjamal.vercel.app/en",
    img1: soltanat_eldjamal_preview,
  },
  {
    slug: "shose-store",
    github:
      "https://github.com/AbderrahmaneOuldgouail/laravel-react-flutter-ecommerce-app",
    live: "",
    img1: shose_store_preview,
  },
  {
    slug: "job-search",
    github: "https://github.com/AbderrahmaneOuldgouail/Job-search",
    live: "",
    img1: job_search_preview,
  },
];

export const imgs = [
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
  { src: image, alt: "image", title: "image", description: "image" },
];
