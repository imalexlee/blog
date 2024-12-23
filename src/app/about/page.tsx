import {CustomMDX} from 'components/CustomMDX'
import {get_mdx_content} from "../../lib/mdxUtils";

export default function AboutPage(){
    const { content } = get_mdx_content("src/markdown/about.mdx")
    return (
        <div className={"mt-20 mb-auto lg:p-10 md:p-8 md:border-[1px] md:border-border-dark md:bg-[#050505] rounded-lg"}>
            <CustomMDX source={content}/>
        </div>
    )
}