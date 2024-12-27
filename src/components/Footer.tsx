"use client"

import Divider from "./Divider";
import ExternalLink,{ ExternalLinkProps} from "./ExternalLink";

const links:ExternalLinkProps[] = [
    {title:"GitHub", url:"https://github.com/imalexlee"},
    {title:"YouTube", url:"https://www.youtube.com/@alex_d_lee"},
    {title:"LinkedIn", url:"https://www.linkedin.com/in/alex-lee-635688227/"},
];

export default function Footer(){
    return (
        <div id={"footer container w-full"} className={"mt-20 "}>
            <Divider/>
            <div className={"flex justify-between mt-20 font-sans "}>
                <div id={"left footer"} className={"flex flex-col justify-between "}>
                    <div id={"get connected container"} className={"flex flex-col"}>
                        <span className={"font-extralight md:text-3xl text-2xl"}>Get In Touch</span>
                        <a className={"hover:cursor-pointer hover:opacity-80 md:text-base text-sm"} onClick={(e) => {
                            window.location.href =  "mailto:alexdlee1217@gmail.com"
                            e.preventDefault()
                        }}>
                            alexdlee1217@gmail.com
                        </a>
                    </div>
                    <span id={"copyright"} className={"text-neutral-400 md:text-base text-sm"}>
                        © 2024 Alex Lee
                    </span>
                </div>
                <div id={"right footer"} className={"flex flex-col justify-between gap-10"}>
                    <div id={"links container"} className={"flex flex-col gap-2"}>
                        {links.map((item,idx) => (
                            <ExternalLink key={idx} title={item.title} url={item.url}/>
                        ))}
                    </div>
                    <span id={"location"} className={"text-neutral-400 md:text-base text-sm"}>
                        Georgia, USA
                    </span>
                </div>

            </div>
        </div>
    )
}