"use server"

import { validateString, getErrorMessage } from "@/lib/utils"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (formData: FormData) => {
    console.log("Running on server")
    console.log(formData.get('senderEmail'))
    console.log(formData.get('message'))

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail, 200)) {
        return {
            error: "senderEmail is not a string"
        }
    }

    if (!validateString(message, 1000)) {
        return {
            error: "message is not a string"
        }
    }

    try {
        await resend.emails.send({
            from: "<Contact formonboarding@resend.dev>",
            to: "g.flambard@gmail.com",
            subject: "Contact form",
            reply_to: senderEmail as string,
            react : "hello"
        })
    } catch (error: unknown) {



        return {
            error: getErrorMessage(error)
        }
    }
}

export default sendEmail