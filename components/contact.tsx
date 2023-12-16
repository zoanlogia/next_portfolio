'use client'

import { FaPaperPlane } from "react-icons/fa"
import SectionHeading from "./section-heading"
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks"
import sendEmail from "@/actions/sendEmail"

const Contact = () => {

    const { ref } = useSectionInView('Contact', 0.5)

    return (
        <motion.section ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="contact" className="sm:mb-28 scroll-mt-28 mb-20 w-[min(100%, 38rem)] text-center">
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-3">Please contact me directly at <a className="underline" href="mailto:g.flambard@gmail.com">g.flambard@gmail.com</a> or through this form.</p>
            <form className="mt-10 flex flex-col" action={async formData => await sendEmail(formData)}>
                <input name="senderEmail" className="h-14 rounded-lg border borderBlack px-4" type="email" placeholder="Your email" required maxLength={200} />
                <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Your message" maxLength={1000} required />
                <button className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex justify-center items-center gap-2 focus:scale-110 hover:scale-110 hover-active:scale-105 hover:bg-gray-950" type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" /></button>
            </form>
        </motion.section>
    )
}

export default Contact