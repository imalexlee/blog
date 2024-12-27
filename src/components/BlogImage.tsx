import Image from 'next/image'
type BlogImageProps = {
    src:string
    alt:string
    desc?:string
};


export default function BlogImage(props:BlogImageProps){
    return(
        <div className={"my-10 self-center relative flex flex-col gap-6"}>
            <Image src={props.src} width={1920} height={1080} sizes={"(max-width: 768px) 768px"}  loading={"lazy"} alt={props.alt} />
            <span className={"md:text-sm text-xs font-sans text-neutral-400"}>{props.desc}</span>
        </div>
    )
}