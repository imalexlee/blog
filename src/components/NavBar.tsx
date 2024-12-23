"use client"

import Link from "next/link";
import {useState} from "react";
import {usePathname} from 'next/navigation'

type NavButton = {
    title:string;
    slug:string;
    selected:boolean;

};

type NavButtonProps={
    nav_button: NavButton;
    idx: number;
    on_press: (index: number) => void;
};

function NavButton(props:NavButtonProps){
    const button_selected_style = {
        true: "bg-neutral-800 border-neutral-700 ",
        false: "border-neutral-900 hover:bg-neutral-800 hover:border-neutral-700"
    }
    return (
        // @ts-expect-error "ts says I can't use boolean as index, but I can"
        <Link onClick={() => props.on_press(props.idx)} href={props.nav_button.slug} className={`text-sm  px-6 py-1.5 rounded-full border-[1px] ${button_selected_style[props.nav_button.selected]} `}>{props.nav_button.title}</Link>
    )
}

export default function NavBar(){
    const path = usePathname();
    const is_about:boolean = path == "/about";

    const [selected_nav_items, set_selected] = useState(() => {
        return [!is_about, is_about];
    });


    const nav_buttons: NavButton[] = [
        {
            title: "Blog",
            slug:"/",
            selected:selected_nav_items[0]
        },
        {
            title: "About",
            slug:"about",
            selected:selected_nav_items[1]
        },
    ]

    const handle_nav_selected = (selectedIndex: number) => {
        const new_selected_items = selected_nav_items.map((_, index) =>
            index === selectedIndex
        );
        set_selected(new_selected_items);
    };

    return(
        <nav className={"fixed flex  top-10 right-0 left-0 items-center justify-center z-50"}>
            <div id={"nav container"} className={"flex justify-around  gap-3 px-2.5 py-1.5 rounded-full  bg-neutral-900 border-neutral-800 border-[1px] opacity-90"}> {nav_buttons.map((item, idx) => (
                    <NavButton key={idx}  nav_button={item} idx={idx} on_press={handle_nav_selected} />
                    ))}
            </div>
        </nav>
    )
}