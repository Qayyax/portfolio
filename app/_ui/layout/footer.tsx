// TODO:
// - Icon links to :
// - [x] Github, linked in, x, gmail, youtube
// - [] my name at the center of the footer
// - [] Buy me coffe icon
//   - [] https://coff.ee/qayyax

import SocialIcon from "../components/icons/social-icons";

import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa6";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaInstagram as Instagram } from "react-icons/fa6";

const links = {
  youtube: {
    title: "Youtube",
    link: "https://www.youtube.com/@TifeLogs",
    icon: Youtube,
  },
  gitHub: {
    title: "GitHub",
    link: "https://www.github.com/qayyax",
    icon: Github,
  },
  linkedIn: {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tife-olatunji-b12729296/",
    description: "Send me a message here :)",
    icon: LinkedIn,
  },
  instagram: {
    title: "Instagram",
    link: "https://www.instagram.com/tife_len/",
    icon: Instagram,
    description: "I post art and random things, chat with me here",
  },
  twitter: {
    title: "X / Twitter",
    link: "https://x.com/qayyax",
    icon: Twitter,
    description: "I only post when I make something",
  },
};

export default function Footer() {
  return (
    <footer className="flex">
      <SocialIcon to={links.gitHub.link} icon={links.gitHub.icon} />
      <SocialIcon to={links.twitter.link} icon={links.twitter.icon} />
      <SocialIcon to={links.linkedIn.link} icon={links.linkedIn.icon} />
      <SocialIcon to={links.instagram.link} icon={links.instagram.icon} />
      <SocialIcon to={links.youtube.link} icon={links.youtube.icon} />
    </footer>
  );
}
