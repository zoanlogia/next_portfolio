import React from 'react'

const Footer = () => {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500 block'>
            <small className='mb-2 text-xs'>
                &copy; 2023 Guillaume. All rights reserved.
            </small>

            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> built with react & next.js (App router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting
            </p>

        </footer>
    )
}

export default Footer