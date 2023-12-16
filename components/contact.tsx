'use client'

import SectionHeading from "./section-heading"
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks"
import sendEmail from "@/actions/sendEmail"
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast"

const Contact = () => {

    const { ref } = useSectionInView('Contact', 0.5)

    return (
        <motion.section ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="contact" className="sm:mb-28 scroll-mt-28 mb-20 w-[min(100%, 38rem)] text-center">
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className="underline" href="mailto:g.flambard@gmail.com">g.flambard@gmail.com</a> or through this form.</p>
            <form className="mt-10 flex flex-col dark:text-black/80"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        return toast.error(error)
                    }

                    toast.success('Email sent successfully! ✨');
                }}>
                <input name="senderEmail" className="h-14 rounded-lg border borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition dark:outline-none" type="email" placeholder="Your email" required maxLength={200} />
                <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition dark:outline-none" placeholder="Your message" maxLength={1000} required />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact