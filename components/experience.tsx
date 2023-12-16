'use client'

import React from "react"
import { experiencesData } from "@/lib/data"
import SectionHeading from "./section-heading"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useSectionInView } from "@/lib/hooks"

const Experience = () => {

    const { ref } = useSectionInView('Experience', 0.5)

    return (
        <section ref={ref} id="experience" className="sm:mb-40 scroll-mt-28 mb-28">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline className="vertical-timeline-element--work"
                animate={true}
                lineColor=""
            >
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{ background: '#f3f4f6', boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.05)', padding: '1.3rem', textAlign: 'left' }} contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{ background: "white", fontSize: '1.5rem' }}
                                visible={true}
                            >
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}

export default Experience
