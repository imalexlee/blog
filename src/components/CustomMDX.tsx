import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React from 'react'
import Divider from "./Divider";
//import Image from "next/image";
import BlogImage from "./BlogImage"
import ExternalLink from "./ExternalLink";
import CodeBlock from "./CodeBlock";

function h1() {
    const component = (props: React.ComponentProps<"h1">) => (
        <h1 className={"font-sans font-extralight lg:text-6xl md:text-5xl text-4xl mb-10"}>{props.children}</h1>
    )
    component.displayName = "Heading1";
    return component
}

function h2() {
    const component = (props: React.ComponentProps<"h2">) => (
        <h1 className={"font-sans font-extralight lg:text-[3.25rem] md:text-[2.6375rem] text-[2.025rem] mb-8"}>{props.children}</h1>
    )
    component.displayName = "Heading2";
    return component
}

function h3() {
    const component = (props: React.ComponentProps<"h3">) => (
        <h1 className={"font-sans font-extralight lg:text-[2.75rem] md:text-[2.275rem] text-[1.8rem] mb-6"}>{props.children}</h1>
    )
    component.displayName = "Heading3";
    return component
}

function h4() {
    const component = (props: React.ComponentProps<"h4">) => (
        <h1 className={"font-sans font-light lg:text-4xl md:text-[1.9125rem] text-[1.575rem] mb-4"}>{props.children}</h1>
    )
    component.displayName = "Heading4";
    return component
}

function h5() {
    const component = (props: React.ComponentProps<"h5">) => (
        <h1 className={"font-sans font-light lg:text-[1.75rem] md:text-[1.55rem] text-[1.35rem] mb-4"}>{props.children}</h1>
    )
    component.displayName = "Heading5";
    return component
}

function h6() {
    const component = (props: React.ComponentProps<"h6">) => (
        <h1 className={"font-sans font-extralight lg:text-xl md:text-[1.1875rem] text-lg mb-4"}>{props.children}</h1>
    )
    component.displayName = "Heading6";
    return component
}

function p() {
    const component = (props: React.ComponentProps<"p">) => (
        <p className={"font-sans md:text-base text-sm mb-5"}>{props.children}</p>
    )
    component.displayName = "Paragraph";
    return component
}

function hr(){
    const component = () => (
        <div className={"my-10"}>
            <Divider/>
        </div>
    )
    component.displayName = "HorizontalRule";
    return component
}

function ul() {
    const component = (props: React.ComponentProps<"ul">) => (
        <ul className={"list-inside list-disc space-y-2 font-sans md:text-base text-sm mb-5"}>{props.children}</ul>
    )
    component.displayName = "Unordered List";
    return component
}

function ol() {
    const component = (props: React.ComponentProps<"ol">) => (
        <ol className={"list-inside list-decimal space-y-2 font-sans md:text-base text-sm mb-5"}>{props.children}</ol>
    )
    component.displayName = "Ordered List";
    return component
}


function div() {
    const component = (props: React.ComponentProps<"div">) => (
        <div className={""}>{props.children}</div>
    )
    component.displayName = "Div";
    return component
}



const intrinsic_components = {
    h1: h1(),
    h2: h2(),
    h3: h3(),
    h4: h4(),
    h5: h5(),
    h6: h6(),
    p: p(),
    hr: hr(),
    ul: ul(),
    ol: ol(),
    div:div(),
}

const custom_components = {BlogImage, ExternalLink, CodeBlock}

export function CustomMDX(props:MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...intrinsic_components, ...custom_components, ...(props.components || {})}}
        />
    )
}