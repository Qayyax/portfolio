import type { IconType } from "react-icons";
import { FaInstagram, FaStrava, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";

export type Social = {
  name: string;
  action: string;
  href: string;
  icon: IconType;
};

export const YOUTUBE_URL = "https://www.youtube.com/@TifeLogs";
export const SUBSCRIBE_URL = `${YOUTUBE_URL}?sub_confirmation=1`;
export const TRAINING_PLAN_URL =
  "https://app.notion.com/p/Training-Plan-40cf4ab2ca6581c68f34f6fbe11b2053?source=copy_link";
export const EMAIL_URL = "mailto:qayyax@gmail.com";

export const socials: Social[] = [
  { name: "YouTube", action: "Subscribe", href: SUBSCRIBE_URL, icon: FaYoutube },
  { name: "Instagram", action: "Follow", href: "https://www.instagram.com/tifelogs", icon: FaInstagram },
  { name: "TikTok", action: "Watch", href: "https://www.tiktok.com/@tifelogs", icon: FaTiktok },
  { name: "Strava", action: "Run with me", href: "https://www.strava.com/athletes/1545128530", icon: FaStrava },
  { name: "Coffee", action: "Buy me one", href: "https://coff.ee/qayyax", icon: SiBuymeacoffee },
  { name: "Email", action: "Say hi", href: EMAIL_URL, icon: IoMailOutline },
];

export const moreLinks = [
  { name: "GitHub", href: "https://www.github.com/qayyax" },
  { name: "DeviantArt", href: "https://www.deviantart.com/qayyax/gallery" },
  { name: "Flickr", href: "https://www.flickr.com/photos/204502360@N07/" },
];
