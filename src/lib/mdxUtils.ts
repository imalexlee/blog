import fs from "fs";
import path from "path";

export type FrontMatter = {
    title:string;
    description:string;
    publishedAt:string;
    image?:string;
    slug:string
}

function parse_frontmatter(filepath:string):FrontMatter {
    const file_content = fs.readFileSync(filepath, 'utf-8')
    const frontmatter_regex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatter_regex.exec(file_content)
    const front_matter_block = match![1]
    const front_matter_lines = front_matter_block.trim().split('\n')
    const frontmatter: Partial<FrontMatter> = {}

    front_matter_lines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        frontmatter[key.trim() as keyof FrontMatter] = value
    })

    // remove .mdx extension
    const filename = path.basename(filepath)
    frontmatter.slug = filename.replace(".mdx", "")

    return frontmatter as FrontMatter;
}

// retrieves mdx frontmatter with above type given the directory of all mdx files
export function get_frontmatter_arr(dir:string):FrontMatter[]{
    // get a list of .mdx file names
    const filenames = fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
    const frontmatter_arr:FrontMatter[] = []
    for (let i = 0; i < filenames.length; i++) {
        const new_frontmatter:FrontMatter = parse_frontmatter(dir + filenames[i])
        frontmatter_arr.push(new_frontmatter)
    }
    return frontmatter_arr;
}

// pass in the slug or filename with .mdx name omitted
export function get_mdx_content(path:string):{frontmatter:FrontMatter, content:string}{
    const frontmatter_regex = /---\s*([\s\S]*?)\s*---/
    const file_content = fs.readFileSync(path, 'utf-8')
    return {
        frontmatter: parse_frontmatter(path),
        content: file_content.replace(frontmatter_regex, '').trim()
    }
}

export function format_date(date: string, include_relative = false) {
    const currentDate = new Date()
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    const targetDate = new Date(date)

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    const daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate;

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = 'Today'
    }

    const fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    if (!include_relative) {
        return fullDate
    }

    return `${fullDate} (${formattedDate})`
}