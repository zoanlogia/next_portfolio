'use client'

import { skillsData } from "@/lib/data"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from 'framer-motion'

const Skills = () => {

    const { ref } = useSectionInView('Skills', 0.5)

    const fadeInAnimationsVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    }

    return (
        <section ref={ref} className="text-center scroll-mt-28 max-w-[53rem] sm:mb-40">
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index} className="bg-white border border-black-/[0.1] rounded-xl px-5 py-2" key={index}>{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills