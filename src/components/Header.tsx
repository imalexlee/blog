export default function Header(){
    return (
        <div id={"header container"} className={" font-sans w-full flex flex-col justify-center gap-1.5 h-96"}>
            <span className={"md:text-7xl text-6xl font-nohemi font-extralight"}>alex lee</span>
            <span className={"text-neutral-400 font-sans md:text-lg text-base"}>
                <span className={"underline decoration-accent text-white"}>graphics</span> and <span className={"underline decoration-accent text-white"}>systems</span> programmer</span>
        </div>
    )
}