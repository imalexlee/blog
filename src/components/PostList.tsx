import PostCard from "./PostCard";
import {FrontMatter, get_frontmatter_arr} from "../lib/mdxUtils";

export default function PostList(){
    const frontmatter_arr:FrontMatter[] = get_frontmatter_arr("src/markdown/posts/")
    return (
        <div className={"grid lg:grid-cols-2 grid-cols-1 gap-5 w-full h-fit "} >
            {frontmatter_arr.map((item,idx) => (
               <PostCard key={idx} {...item}/>
            ))}
        </div>
    )
}