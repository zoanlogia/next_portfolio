import SectionHeading from "@/components/section-heading"
import { projectsData } from "@/lib/data"
import React, { useRef } from "react"
import Project from "./project"


const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-28">
            <SectionHeading>Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Projects