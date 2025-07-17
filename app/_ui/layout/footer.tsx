import SocialIcon from "../components/icons/social-icons";

import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa6";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaInstagram as Instagram } from "react-icons/fa6";
import { IoMailOutline as Gmail } from "react-icons/io5";
import { SiBuymeacoffee as Coffee } from "react-icons/si";

const links = [
  {
    title: "Buyme Coffee",
    link: "https://coff.ee/qayyax",
    icon: Coffee,
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/@TifeLogs",
    icon: Youtube,
  },
  {
    title: "GitHub",
    link: "https://www.github.com/qayyax",
    icon: Github,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tife-olatunji-b12729296/",
    description: "Send me a message here :)",
    icon: LinkedIn,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/tife_len/",
    icon: Instagram,
    description: "I post art and random things, chat with me here",
  },
  {
    title: "X / Twitter",
    link: "https://x.com/qayyax",
    icon: Twitter,
    description: "I only post when I make something",
  },
  {
    title: "Gmail",
    link: "mailto:qayyax@gmail.com",
    icon: Gmail,
    description: "Send me a mail",
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-4 p-5">
      {links.map((item) => (
        <SocialIcon key={item.link} icon={item.icon} to={item.link} />
      ))}
    </footer>
  );
}
