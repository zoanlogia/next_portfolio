import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}
const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className='bg-gray-100 !text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received the following message from the contact form</Heading>
                            <Text className=''>{message}</Text>
                            <Hr />
                            <Text>The sender's email address is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFormEmail