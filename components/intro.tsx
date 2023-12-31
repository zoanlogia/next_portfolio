'use client'

import Image from 'next/image'
import profilePicture from '@/public/guillaume_flambard_profile.jpeg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
const Intro = () => {

    const { ref } = useSectionInView('Home', 0.5)

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section ref={ref} id='home' className='mb-2 max-w-[50rem] sm:mb-0 text-center scroll-mt-[100rem]'>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.2 }}>
                        <Image src={profilePicture} alt='Guillaume Flambard' width={192} height={192} quality={95} priority={true} className='rounded-full h-28 w-28 border-[0.35rem] object-cover border-white' />
                    </motion.div>

                    <motion.span className='text-4xl absolute bottom-0 right-0' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', duration: 0.7, stiffness: 125, delay: 0.1 }}>👨‍💻</motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl !leading-[1.5]' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className='font-semibold'>Hello, I'm Guillaume Flambard.</span> I'm a <span className="font-semibold">Front-End Developer</span> specialized in <span className="font-semibold">Javascript.</span> I enjoy building <span className="font-semibold">web applications</span> with <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', duration: 0.3, stiffness: 125, delay: 0.2 }}>

                <Link className='group bg-gray-950 text-white flex items-center gap-2 rounded-full px-7 py-3 outline-none focus:scale-[1.07] hover:scale-[1.07] hover:bg-gray-950 active:scale-105 transition' href='/#contact' onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()) }}>Contact me
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a className='group bg-white flex items-center gap-2 rounded-full px-7 py-3 outline-none focus:scale-[1.07] hover:scale-[1.07] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href="/cv_guillaume_flambard_english.pdf" download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1" /></a>

                <a className='bg-white flex items-center gap-2 rounded-full p-4 text-gray-700 outline-none focus:scale-[1.07] hover:scale-[1.07] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/guillaume-flambard/?locale=en_US" target='_blank'><BsLinkedin /></a>

                <a className='bg-white flex items-center gap-2 rounded-full p-4 text-gray-700 outline-none focus:scale-[1.07] hover:scale-[1.07] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60' href="https://github.com/zoanlogia" target='_blank'><BsGithub /></a>
            </motion.div>
        </section>
    )
}

export default Intro