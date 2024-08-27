export default function LiveSite({ URL, name }) {
    return (
        <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer  md:text-[1.5em] "
        >
            {name}
        </a>
    )
}
