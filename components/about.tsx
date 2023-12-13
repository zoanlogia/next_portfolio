'use client'

import SectionHeading from "@/components/section-heading"
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.section id="about" className="mb-28 max-w-[45rem] leading-8 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.175, duration: 0.2}}>
            <SectionHeading>About me</SectionHeading>
            <p className="text-center">
                <span className="font-medium underline">World traveler</span>🌏<span className="italic"> with an innate ability to connect with diverse cultures and individuals.</span><br /><br />

                <span className="font-medium"></span>
                My <span className="font-medium">global adventures</span> have not only broadened my perspectives but also exposed me to various digital professionals. One transformative encounter was with digital nomads who inspired my dive into the world of technology. <br /><br />

                I then pursued an academic journey in <span className="font-medium underline">web development</span>, focusing on both the foundational and advanced aspects of building <span className="font-medium">web solutions</span>. My commitment led me to an internship where I applied practical skills, developed custom web applications, and collaborated with multidisciplinary teams. <br /><br />

                To further hone my technical prowess, I enrolled in <span className="font-medium">OpenClassroom's Front-End Developer</span> program. Here, I delved deep into the intricacies of <span className="font-medium underline">React (Next.js)</span> – mastering components, state management, hooks, and the React ecosystem. <br /><br /> Additionally, I explored <span className="font-medium underline">Node.js and MongoDB</span>, understanding its event-driven architecture, and integrated it with <span className="font-medium">databases and backend</span> services. Alongside these, I also became proficient in modern tools like <span className="font-medium">Webpack, Babel</span>, and various testing libraries to ensure robust, scalable, and efficient web applications. <br /><br />

                Today, I combine my passion for <span className="underline font-medium">travel</span> ✈️ and <span className="underline font-medium">culture</span> 🍙 with my <span className="underline font-medium">technical expertise</span> 💼, aiming to create meaningful, user-centric web solutions that resonate globally.
            </p>
        </motion.section>
    )
}

export default About