interface Project {
    name: string,
    link: string,
    date: string,
    summary: string,
    learn: string, 
    tech: Array<{
        lang: string,
        colour: string
    }>,
    img: string
}

export default Project