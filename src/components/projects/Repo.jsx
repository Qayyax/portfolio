export default function Repo({ URL }) {
    return (
        <a
            href={URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer font-medium text-[0.875em] border 
            border-[#6B4E92] rounded-2xl p-2"
        >
            View on Github
        </a>
    )
}
