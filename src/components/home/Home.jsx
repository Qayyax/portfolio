import Featured from "./Featured"
import MainComp from "./MainComp"
export default function Home({ data }) {
    return (
        <main
            className="flex flex-col items-center justify-center gap-y-[86px] lg:gap-y-40
            px-10 pt-[61px] pb-4 lg:pt-[73px] lg:pb-[18px]"
        >
            <MainComp />
            <Featured data={data} />
        </main>
    )
}
