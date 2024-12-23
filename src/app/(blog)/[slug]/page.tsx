import {format_date, get_mdx_content} from "../../../lib/mdxUtils";
import {CustomMDX} from "../../../components/CustomMDX";
import Image from "next/image";

export default async function BlogPost({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const {frontmatter, content } = get_mdx_content("public/markdown/posts/" + slug + ".mdx")
    const formatted_date = format_date(frontmatter.publishedAt, false)

    return(
        <div id={"blog post container"} className={"md:mt-20 mt-28 mb-auto font-sans"} >
            <div className={"flex flex-col gap-3"}>
                <h1 id={"title"} className={"lg:text-6xl md:text-5xl text-4xl font-extralight"}>{frontmatter.title}</h1>
                <span id={"publish date"} className={"md:text-lg text-base text-neutral-400"}>{formatted_date}</span>
            </div>
            <Image width={1920} height={1080} loading={"lazy"}
                   style={{width: "100%", height:"auto"}}
                   className={"aspect-auto rounded-xl border border-border-dark my-12 "} src={frontmatter.image!} alt={"blog image"}/>
            <div className={"lg:p-10 md:p-8 md:border-[1px] md:border-border-dark md:bg-[#050505] rounded-lg flex flex-col relative w-full"}>
                <CustomMDX source={content}/>
            </div>
        </div>
    )
}