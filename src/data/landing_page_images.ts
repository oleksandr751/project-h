import paris_image from "../images/paris.jpg";
import naturmort_image from "../images/naturmort.jpg";
import parthenon_image from "../images/parthenon.jpg";
export const landing_page_images = [
  {
    src: paris_image,
    id: Math.floor(Math.random() * 10000),
    alt: "Paris_image",
  },
  {
    src: naturmort_image,
    id: Math.floor(Math.random() * 10000),
    alt: "Naturmort_image",
  },
  {
    src: parthenon_image,
    id: Math.floor(Math.random() * 10000),
    alt: "Parthenon_image",
  },
];
