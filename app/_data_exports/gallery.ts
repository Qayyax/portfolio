export type GalleryItem = {
  src: string;
  caption: string;
  alt: string;
};

export const artGallery: GalleryItem[] = [
  // Add image files to /public/gallery/art/ and list them here.
  // Example:
  // { src: "/gallery/art/portrait-study-0726.jpg", caption: "PORTRAIT STUDY — 07/26", alt: "Portrait study" },
  {
    src: "/gallery/art/couple.jpg",
    caption: "Couple portrait",
    alt: "Two couples taking a selfie",
  },
  {
    src: "/gallery/art/summer.jpg",
    caption: "Summer Smith Rick and Morty",
    alt: "Summer smith from Rick and Morty on the phone",
  },
  {
    src: "/gallery/art/naruto.jpg",
    caption: "Naruto and Hinata",
    alt: "Naruto and Hinata taking a picture",
  },
];

export const photoGallery: GalleryItem[] = [
  // Add image files to /public/gallery/photo/ and list them here.
  // Example:
  // { src: "/gallery/photo/toronto-street-jul.jpg", caption: "TORONTO — STREET, JUL", alt: "Toronto street" },
  {
    src: "/gallery/photo/dt.jpg",
    caption: "Downtown picture - Toronto",
    alt: "Picture of a wall downtown Toronto",
  },
  {
    src: "/gallery/photo/ttc.jpg",
    caption: "Subway TTC",
    alt: "Picture of people taking the subway",
  },
  {
    src: "/gallery/photo/wc.jpg",
    caption: "Mexico vs England 2026 World cup watch party",
    alt: "Mexico vs England 2026 World cup watch party",
  },
];
