'use client'

import { useScroll, motion, useTransform } from "framer-motion"
import Image from "next/image.js"
import { useRef } from "react"
import { projectsData } from "@/lib/data"

type ProjectProps = typeof projectsData[number]

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="group mb-3 sm:mb-8 last:mb-0">
            <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[21rem] mb-3 sm:mb-8 last:mb-0  hover:bg-gray-200 transition group-even:pl-8 rounded-lg">
                <div className="pt-4 px-5 sm:pl-10 sm:pr-2 pb-7 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
                    <ul className="flex flex-wrap gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
                        ))}

                        <Image className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                        group-even:right-[initial]
                        group-even:-left-40
                        transition
                        
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3 
                        group-hover:translate-y-3 
                        group-hover:-rotate-2
                        
                        group-even:group-hover:translate-x-3 
                        group-even:group-hover:translate-y-3 
                        group-even:group-hover:rotate-2" src={imageUrl} alt="Project" quality={95} />
                    </ul>
                </div>
            </section>
        </motion.div>
    )
}

export default Project