"use client"

import SectionHeading from "@/components/section-heading"
import { projectsData } from "@/lib/data"
import React, { useEffect, useRef } from "react"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

const Projects = () => {

    const {ref} = useSectionInView('Projects', 0.5)

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
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