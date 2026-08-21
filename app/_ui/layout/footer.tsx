const footerLinks = [
  { title: "Email", href: "mailto:qayyax@gmail.com" },
  { title: "YouTube", href: "https://www.youtube.com/@TifeLogs" },
  { title: "DeviantArt", href: "https://www.deviantart.com/qayyax/gallery" },
  { title: "Flickr", href: "https://www.flickr.com/photos/204502360@N07/" },
  { title: "GitHub", href: "https://www.github.com/qayyax" },
  { title: "Buy Me a Coffee", href: "https://coff.ee/qayyax" },
  { title: "Store", href: "/store" },
];

export default function Footer() {
  return (
    <footer className="mt-auto py-12 pb-[70px]">
      <div className="max-w-[920px] mx-auto px-7 flex justify-between items-end flex-wrap gap-6">
        <div className="flex gap-5 flex-wrap text-[0.8rem] [font-family:var(--font-inter)]">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-ink-soft hover:text-ink border-b border-transparent hover:border-rust transition-colors duration-150"
            >
              {link.title}
            </a>
          ))}
        </div>
        <p className="italic text-[0.95rem] max-w-[34ch] [font-family:var(--font-fraunces)] text-ink-soft">
          &ldquo;It is not the knowing that is difficult, but the doing.&rdquo;
        </p>
      </div>
    </footer>
  );
}
