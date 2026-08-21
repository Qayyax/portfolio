import SocialIcon from "../components/icons/social-icons";
import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { IoMailOutline as Gmail } from "react-icons/io5";
import { SiBuymeacoffee as Coffee } from "react-icons/si";
import { FaPalette as Palette } from "react-icons/fa6";
import { FaCamera as Camera } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { title: "Buyme Coffee", link: "https://coff.ee/qayyax", icon: Coffee },
  { title: "Youtube", link: "https://www.youtube.com/@TifeLogs", icon: Youtube },
  { title: "GitHub", link: "https://www.github.com/qayyax", icon: Github },
  { title: "Gmail", link: "mailto:qayyax@gmail.com", icon: Gmail },
  { title: "Art Gallery", link: "https://www.deviantart.com/qayyax/gallery", icon: Palette },
  { title: "Photo Gallery", link: "https://www.flickr.com/photos/204502360@N07/", icon: Camera },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-purple-500/30 py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {socialLinks.map((item) => (
            <SocialIcon key={item.link} icon={item.icon} to={item.link} />
          ))}
          <Link
            href="/store"
            className="text-sm font-mono opacity-50 hover:opacity-100 hover:text-purple-500 transition-all"
          >
            Store
          </Link>
        </div>
        <p className="font-mono text-sm text-gray-500 italic max-w-[32ch] text-center md:text-right">
          &ldquo;It is not the knowing that is difficult, but the doing.&rdquo;
        </p>
      </div>
    </footer>
  );
}
