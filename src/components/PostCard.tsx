import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {FrontMatter} from "../lib/mdxUtils";


export default function PostCard(props:FrontMatter){
    return(
        <div className={"w-full h-fit z-10"}>
            <Link href={props.slug} className={"hover:opacity-80"} >
                <Image width={1920} height={1080} loading={"lazy"} style={{width:"100%", height:"auto"}}
                       className={"aspect-video rounded-xl border border-border-dark"} src={props.image!}
                       alt={"alt text"}/>
            </Link>
            <div id={"text container"} className={"flex flex-col gap-2 mt-2 px-2 font-sans"}>
                <div className={"flex flex-col"}>
                    <span className={"xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-extralight"}>{props.title}</span>
                    <span className={"xl:text-base lg:text-sm md:text-base text-sm text-neutral-400"}>{props.description}</span>
                </div>
                <Link className={"flex items-center gap-1 hover:opacity-80 font-normal"} href={props.slug}>
                    <span className={"xl:text-base lg:text-sm md:text-base text-sm"}>Continue Reading</span>
                    <MdArrowOutward/>
                </Link>
            </div>
        </div>
    )
}