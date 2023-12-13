"use client"

import SectionHeading from "@/components/section-heading"
import { projectsData } from "@/lib/data"
import React, { useEffect, useRef } from "react"
import Project from "./project"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useInView } from "react-intersection-observer"


const Projects = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection('Projects')
        }
    }, [inView, setActiveSection])

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
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