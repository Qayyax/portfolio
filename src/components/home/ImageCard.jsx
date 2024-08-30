export default function ImageCard() {
    return (
        <div
            className="relative w-[281px] h-[281px] border-2 md:border-[3px] border-[#6B4E92] rounded-[30px]
            lg:w-[568px] lg:h-[568px]"
        >
            <div
                className="absolute w-[281px] h-[281px] rounded-[30px] -left-4
                -top-4 bg-[url('/image/profile.jpg')] bg-cover bg-center lg:w-[568px] 
                lg:h-[568px] lg:-left-8 lg:-top-8"
            >
                <div
                    className="relative w-full h-full"
                >
                    <span
                        className="absolute top-5 -left-6 border-[1.48px] md:border-[3px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 lg:top-10 lg:-left-10"
                    >
                        React
                    </span>
                    <span
                        className="absolute bottom-20 -left-3 border-[1.48px] md:border-[3px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 lg:bottom-40 lg:-left-6"
                    >
                        Python
                    </span>
                    <span
                        className="absolute bottom-6 -right-5 border-[1.48px] md:border-[3px] border-[#6B4E92]
                        text-[#6B4E92] bg-white rounded-3xl py-2 px-4 lg:bottom-12 lg:-right-10"
                    >
                        TypeScript
                    </span>
                </div>
            </div>
        </div>
    )
}
