import PostCard from "./PostCard";
import {FrontMatter, get_frontmatter_arr} from "../lib/mdxUtils";

export default function PostList(){
    const frontmatter_arr:FrontMatter[] = get_frontmatter_arr("public/markdown/posts/")
    // sort in descending chronological order
    const sorted_frontmatter = [...frontmatter_arr].sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB.getTime() - dateA.getTime();
    });
    return (
        <div className={"grid lg:grid-cols-2 grid-cols-1 gap-5 w-full h-fit "} >
            {sorted_frontmatter.map((item,idx) => (
               <PostCard key={idx} {...item}/>
            ))}
        </div>
    )
}