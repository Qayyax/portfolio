import ImageCard from "./ImageCard";
import NavButtons from "./NavButtons";

export default function MainComp() {
    return (
        <main
            className="flex flex-col gap-y-4 mb-4 items-center justify-center my-4"
        >
            <h1
                className="font-extrabold text-[2.5em]"
            >
                {`Hi, I'm Tife`}
            </h1>
            <ImageCard />
            <p>some text goes here</p>
            <NavButtons />
        </main>
    )
}
