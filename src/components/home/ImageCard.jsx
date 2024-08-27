export default function ImageCard() {
    return (
        <div
            className="relative w-[280px] h-[280px] border-2 border-purple-800 rounded-[30px]
            md:w-[568px] md:h-[568px]"
        >
            <div
                className="absolute w-[280px] h-[280px] bg-yellow-500 rounded-[30px] -left-4
                -top-4 bg-[url('/image/profile.jpg')] bg-cover bg-center md:w-[568px] 
                md:h-[568px] md:-left-8 md:-top-8"
            >
                <div
                    className="relative w-full h-full"
                >
                    <span
                        className="absolute top-5 -left-6 border-[1.48px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 md:top-10 md:-left-10"
                    >
                        React
                    </span>
                    <span
                        className="absolute bottom-20 -left-3 border-[1.48px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 md:bottom-40 md:-left-6"
                    >
                        Python
                    </span>
                    <span
                        className="absolute bottom-6 -right-5 border-[1.48px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 md:bottom-12 md:-right-10"
                    >
                        TypeScript
                    </span>

                </div>

            </div>
        </div>
    )
}
