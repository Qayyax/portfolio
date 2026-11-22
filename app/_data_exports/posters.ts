export type Poster = {
  slug: string;
  title: string;
  image: string;
  alt: string;
};

// Set this to the Etsy shop URL (e.g. "https://ironera.etsy.com") once the shop is live.
// While it is null, the section shows as "Opening soon" and the cards are not links.
export const ETSY_URL: string | null = "https://tifelogs.etsy.com";

export const posters: Poster[] = [
  {
    slug: "one-more-rep",
    title: "One More Rep",
    image: "/posters/one-more-rep.jpg",
    alt: "Retro poster of an athlete deadlifting in front of a sunburst, headline One More Rep",
  },
  {
    slug: "show-up-anyway",
    title: "Show Up Anyway",
    image: "/posters/show-up-anyway.jpg",
    alt: "Retro poster of an athlete walking into a glowing gym on a rainy street, headline Show Up Anyway",
  },
  {
    slug: "earn-the-pump",
    title: "Earn The Pump",
    image: "/posters/earn-the-pump.jpg",
    alt: "Retro poster of a flexed arm gripping a dumbbell, headline Earn The Pump",
  },
  {
    slug: "push-pull-legs",
    title: "Push. Pull. Legs.",
    image: "/posters/push-pull-legs.jpg",
    alt: "Retro poster with three panels showing a bench press, a pull-up and a squat",
  },
  {
    slug: "chalk-up",
    title: "Chalk Up",
    image: "/posters/chalk-up.jpg",
    alt: "Retro poster of hands clapping chalk above a barbell, headline Chalk Up",
  },
  {
    slug: "strong-is-built",
    title: "Strong Is Built",
    image: "/posters/strong-is-built.jpg",
    alt: "Retro poster of a tower of weight plates against a setting sun, headline Strong Is Built",
  },
];
