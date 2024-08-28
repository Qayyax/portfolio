import ImageCard from "./ImageCard";
import NavButtons from "./NavButtons";

export default function divComp() {
    return (
        <main>
            {/*Mobile version */}
            <div
                className="flex flex-col items-center justify-center md:hidden"
            >
                <h1
                    className="font-extrabold text-[2.5em] mb-[22px] "
                >
                    {`Hi, I'm Tife`}
                </h1>
                <div
                    className="mb-6 "
                >
                    <ImageCard />
                </div>
                <p
                    className="text-center max-w-[308px] mb-3.5 "
                >
                    A frontend developer crafting seamless user experience one pixel at a time
                </p>
                <div
                    className=""
                >
                    <NavButtons />
                </div>
            </div>

            {/*Desktop and tablet md: version */}
            <div className="hidden md:block">
                <div
                    className="flex items-center justify-center gap-x-32"
                >
                    <div
                        className="flex flex-col items-start justify-center"
                    >
                        <h1
                            className="font-extrabold text-[3.75em] mb-2"
                        >
                            {`Hi, I'm Tife`}
                        </h1>
                        <p
                            className="text-start max-w-[515px] mb-8 text-[1.5em] "
                        >
                            A frontend developer crafting seamless user experience one pixel at a time
                        </p>
                        <div
                            className=""
                        >
                            <NavButtons />
                        </div>

                    </div>
                    <div>
                        <ImageCard />
                    </div>
                </div>
            </div>
        </main>

    )
}
