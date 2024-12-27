import {MdArrowOutward} from "react-icons/md";

export type ExternalLinkProps = {
    title: string;
    url: string;
};

export default function ExternalLink(props: ExternalLinkProps){
   return(
       <a
            target={"_blank"}
            href={props.url}
            className={"inline-flex items-center gap-1 hover:opacity-80"}>
           <span className={"md:text-base text-sm font-sans font-normal"}>{props.title}</span>
           <MdArrowOutward/>
       </a>
   )
}