import MobileNav from "./MobileNav";

// I probably should put it in ts definitions so I can reuse
type NavProperty = {
  title: string;
  to: string;
};

const navRoutes: NavProperty[] = [
  { title: "About", to: "about" },
  { title: "My_Space", to: "my_space" },
  { title: "Projects", to: "projects" },
  { title: "Store", to: "store" },
];

export default function NavModal() {
  // this would be the modal that shows up when the user clicks the Ham
  // I want it to have a glosry feel to it - I think?
  // Modal, blury undertone, nav components for the mobile modal view
  // would import the mobile Nav component  here to use all the routes
  return (
    <div className="h-full absolute">
      {/* space for the X component as well so that we can close the modal on click*/}
      {/* when we click the x we also want hamburger state to close as well */}
      {/* so I might need to take this up a state as well so that I can have the modal state here */}
      {/* now I need to make the modal showup and take the whole screen */}
      <div className="isolate w-1/2 bg-white/20 shadow-lg ring-1 ring-black/5">
        <ul>
          {/* so this is the div for the routes */}
          {/* I think there is a state for Next Link */}
          {navRoutes.map((nav, index) => (
            <li key={index}>
              <MobileNav title={nav.title} to={nav.to} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
