import SocialIcon from "../components/icons/social-icons";
import { FaYoutube as Youtube } from "react-icons/fa6";
import { FaGithub as Github, FaStrava as Strava } from "react-icons/fa";
import { IoMailOutline as Gmail } from "react-icons/io5";
import { SiBuymeacoffee as Coffee } from "react-icons/si";
import { FaPalette as Palette } from "react-icons/fa6";
import { FaCamera as Camera } from "react-icons/fa";

const socialLinks = [
  { title: "Buyme Coffee", link: "https://coff.ee/qayyax", icon: Coffee },
  { title: "Youtube", link: "https://www.youtube.com/@TifeLogs", icon: Youtube },
  { title: "GitHub", link: "https://www.github.com/qayyax", icon: Github },
  { title: "Gmail", link: "mailto:qayyax@gmail.com", icon: Gmail },
  { title: "Art Gallery", link: "https://www.deviantart.com/qayyax/gallery", icon: Palette },
  { title: "Photo Gallery", link: "https://www.flickr.com/photos/204502360@N07/", icon: Camera },
  { title: "Strava", link: "https://www.strava.com/athletes/1545128530", icon: Strava },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-purple-500/30 py-8">
      <div className="flex justify-center items-center">
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {socialLinks.map((item) => (
            <SocialIcon key={item.link} icon={item.icon} to={item.link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
