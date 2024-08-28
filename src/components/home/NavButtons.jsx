import { Link } from "react-router-dom";

export default function NavButtons() {
    return (
        <div
            className="flex gap-x-8 md:gap-x-4"
        >
            <Link
                className="text-[0.875em] p-3 rounded-[30px] font-medium md:text-[1em] md:p-4 border-2 border-black"
            >
                View my Work
            </Link>
            <Link
                className="text-[0.875em] p-3 rounded-[30px] font-medium md:text-[1em] md:p-4 border-2 border-black"
            >
                About Me
            </Link>
        </div>
    )
}
