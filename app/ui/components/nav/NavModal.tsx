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
  // I want it to have a glosry feel to it - I think?
  // so black bg, purple accent color on the active nav
  // Modal, blury undertone, nav components for the mobile modal view
  // would import the mobile Nav component  here to use all the routes
  return (
    <div className="h-screen absolute top-0 w-1/2 right-0 border-2 border-red-600">
      {/* space for the X component as well so that we can close the modal on click*/}
      {/* when we click the x we also want hamburger state to close as well */}
      {/* so I might need to take this up a state as well so that I can have the modal state here */}
      <div className="isolate w-full h-full bg-black/90 shadow-lg ring-1 ring-black/5 pt-20">
        <ul>
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
