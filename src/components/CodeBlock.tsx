import { codeToHtml, BundledLanguage } from 'shiki'

interface CodeBlockProps {
    code: string
    lang: BundledLanguage
}

export default async function CodeBlock(props: CodeBlockProps) {
    const out = await codeToHtml(props.code, {
        lang: props.lang,
        theme: 'github-dark',
        colorReplacements: {
            '#24292e': '#000000'
        },
        structure: "classic",

    })

    return(
    <div className={"rounded-xl border  my-10 border-border-dark w-full overflow-x-scroll contain-inline-size md:text-sm text-xs lg:p-10 md:p-8 p-4 "}>
        <div dangerouslySetInnerHTML={{__html: out}}/>
    </div>
    )
}
