export type GalleryItem = {
  src: string;
  caption: string;
  alt: string;
};

export const artGallery: GalleryItem[] = [
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
