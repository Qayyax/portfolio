import { moreLinks, socials } from "@/app/_data_exports/socials";

export default function Footer() {
  const links = [...socials, ...moreLinks];

  return (
    <footer className="footer">
      <nav aria-label="All links">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {name}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Tife Olatunji</p>
    </footer>
  );
}
