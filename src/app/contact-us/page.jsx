'use client'
import React from 'react'
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import { motion } from 'framer-motion';
import { Button, ButtonLinkOrange, ButtonLinkWhite } from '@/shared/ButtonLink'
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/contact-us.webp'
import  planImg from '../../../public/assets/img/about-2.png'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { fadeInVariants } from '../page'
import { fadeIn } from '@/shared/GlobalAnimation'
import CalendlyPopup from '@/components/CalendlyEmbed'



export const rentalData = [
    {
        id: 1,
        image: rent1Img,
        title: "Crockeries",
        price: '20,303',
        btnText: 'rent now'
    },
    {
        id: 2,
        image: rent2Img,
        title: "Sashes",
        price: '20,039',
        btnText: 'rent now'
    },
    {
        id: 3,
        image: rent3Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 4,
        image: rent3Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 5,
        image: rent2Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 6,
        image: rent1Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    }
]

const slides = [
    {
        id: 1,
        title: 'Mission',
        description: "To provide seamless event planning and high-quality rental services, ensuring stress-free and memorable celebrations for every client.",
    },
    {
        id: 2,
        title: 'Vision',
        description: "To be the go-to brand for event excellence, known inovation, prfessionalism and customer satisfaction",
    },

]

const page = () => {
  return (
    <>
        <section>
            <HeroComponent title={'Contact Us'} image={heroImg}/>
        </section>
            
        {/* contact us */}
        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            {...{ ...fadeIn, transition: { delay: 0.5 } }} 
            className=' px-5 md:px-10 lg:px-20 py-10 md:py-40 h-full md:min-h-[90vh] overflow-hidden'>
            <div className=' h-full flex flex-col md:flex-row justify-center  mx-auto gap-20 '>
                <div className='md:w-1/2 '>
                    <p className='text-2xl lg:pb-16 md:text-4xl font-bold py-3 md:font-bold '>Get in Touch with EventsByOTH</p>
                    <p className='text-neutral text-lg'>We’d love to hear from you. Whether you have questions, need event planning assistance, or want to book rentals, we’re here to help</p>
                </div>

                <div className='space-y-4 w-full md:w-1/2 '>
                    <p className='tex3t-lg md:text-2xl'>Tell us what you have in mind</p>
                    <form className='space-y-5'>
                        <div>
                            <label htmlFor=""></label>
                            <input className='border border-primary p-3 w-full rounded' type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input className='border border-primary p-3 w-full rounded' type="text" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <textarea className='border border-primary p-3 w-full h-full rounded' rows={5} cols={5} name="" id="" placeholder='How do you want us to help you?'></textarea>
                        </div>
                        <div className='overflow-hidden rounded'>
                            <motion.button whileHover={{ scale: 1.05 }} transition={{duration: 0.5}} className='text-white bg-primary text-center w-full p-3 rounded'>Send Message</motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>

        {/* next event */}
        <motion.section className='pt-10 md:pt-30 h-full'>
            {/* <div className='flex h-full items-center'> */}
                <div className='flex flex-col md:flex-row w-full h-full justify-between'>  
                    <div className='h-[50vh] md:h-[70vh] w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className=' text-3xl md:text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        {/* <ButtonLinkOrange href={`#`} name={'Book a Call'}/> */}
                        <CalendlyPopup title="Book a Call"/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[50vh] md:h-[70vh] relative order-first md:order-last'>
                        {/* <span className='absolute inset-0 bg-darkgray/30 -z-10'></span> */} 
                        <Image src={planImg} alt="ticket" width={500} height={500} className=" w-full h-full object-cover absolute inset-0"/>
                    </div>
                </div>
            {/* </div> */}
        </motion.section> 
    </>
  )
}

export default page