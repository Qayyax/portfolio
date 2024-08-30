import ImageCard from "./ImageCard";
import NavButtons from "./NavButtons";
import { DarkModeContext } from "../DarkModeProvider";
import { useContext } from "react";

export default function MainComp() {
    const { isDarkMode } = useContext(DarkModeContext)
    const h1Color = isDarkMode ? "text-white" : "text-[#201330]"
    const textColor = isDarkMode ? "text-white" : "text-[#6B6B6B]"
    return (
        <section>
            {/*Mobile version */}
            <div
                className="flex flex-col items-center justify-center md:hidden"
            >
                <h1
                    className={`font-extrabold text-[2.5em] mb-[22px] ${h1Color}`}
                >
                    {`Hi, I'm Tife`}
                </h1>
                <div
                    className="mb-6 "
                >
                    <ImageCard />
                </div>
                <p
                    className={`text-center max-w-[308px] mb-3.5 ${textColor}`}
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
                            className={`font-extrabold text-[3.75em] mb-2 ${h1Color}`}
                        >
                            {`Hi, I'm Tife`}
                        </h1>
                        <p
                            className={`text-start max-w-[515px] mb-8 text-[1.5em] ${textColor}`}
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
        </section>

    )
}
