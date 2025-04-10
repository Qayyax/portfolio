import { NavProperty } from "@/type";
import DesktopNavBtn from "../components/nav/DesktopNavButton";

// I probably should export this since I have repeated this in 2 places
const navRoutes: NavProperty[] = [
  { title: "Home", to: "/" }, // would delete this later, or maybe I keep home
  // I don't know if I need the home path
  { title: "About", to: "/about" },
  { title: "My_Space", to: "/my_space" },
  { title: "Projects", to: "/projects" },
  { title: "Store", to: "/store" },
];

export default function DesktopNav() {
  // here would house the nav routes for the tablet / desktop versions
  // Styling so show the one the user is currently on
  // I need to turn the original nav in pages into a component of it's own
  // so I can resue
  // I would come back to this later
  // want to go off
  return (
    <div className="hidden md:block">
      <ul className="flex gap-3 font-bold font-mono justify-center items-center">
        {navRoutes.map((nav, index) => (
          <li key={index}>
            <DesktopNavBtn to={nav.to} title={nav.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
