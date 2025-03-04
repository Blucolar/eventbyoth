'use client'


import React, {Fragment, useEffect, useState} from 'react'
import { motion, m } from 'framer';
import { Link as ScrollTo } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import Image from 'next/image';
import icon from '../../public/assets/img/services_icon.png'
import frame1 from '../../public/assets/img/frame1.png'
import frame2 from '../../public/assets/img/frame2.png'
import frame3 from '../../public/assets/img/frame3.png'
import { ButtonLinkWhite } from '@/shared/ButtonLink';
import SplitScreenCarousel from '@/components/OurExpertiseCarousel';
import contactImg from '../../public/assets/img/contact.png'
import Bookticket from '@/components/Bookticket';
import Link from 'next/link';
import useFadeIn, { fadeIn } from '@/shared/GlobalAnimation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import  hero1 from '../../public/assets/img/webp1.png'
import  hero3 from '../../public/assets/img/webp3.png'

import CalendlyPopup from '@/components/CalendlyEmbed';

import  c1 from '../../public/assets/img/coporate-event1.webp'
import  c2 from '../../public/assets/img/coporate-event2.webp'

import  b1 from '../../public/assets/img/birthday-01.webp'
import  b2 from '../../public/assets/img/birthday-02.webp'


export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const heroDisplay = [
    // {
    //     id: 1,
    //     title: "Wedding Planning",
    //     desc: "From elegant weddings to corporate galas, we bring your vision to life.",
    //     image: hero1,
    //     image2: hero3
    // },
    {
        id: 2,
        title: "Corporate Events",
        desc: "From elegant weddings to corporate galas, we bring your vision to life.",
        image: c1,
        image2: c2
    },
    {
        id: 3,
        title: "Birthday Parties",
        desc: "From elegant weddings to corporate galas, we bring your vision to life.",
        image: b1,
        image2: b2
    },
]

const HeroHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const fadeIn = useFadeIn(0.5);
        
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);



  return (
    <Fragment>
        {/* hero section */}
        <section
            className='relative h-[70vh] md:h-[90vh] bg-homeBg bg-cover bg-no-repeat bg-center z-50'>
            
            <span className='bg-linear-to-r bg-darkgray/20 absolute inset-0 -z-10'></span>

            <motion.div
                {...fadeIn}
                className='text-white flex justify-center  h-full flex-col space-y-10 pl-3 md:pl-5 lg:pl-20'
                >
                <p className='text-2xl sm:text-4xl md:text-5xl font-bold font-serif'>
                Make Every Event Unforgettable, <br className="hidden md:flex"/> with EventsByOTH!
                </p>
                <p className='sm:text-2xl'>From elegant weddings to corporate galas, <br/> we bring your vision to life.</p>
                <div className='flex items-center gap-4'>
                    <motion.div className='' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
                        {/* <Link href={'#'} className='bg-primary text-white py-4 px-6 md:px-8 font-semibold rounded'>Book a call</Link> */}
                        <CalendlyPopup title="Book a Call"/>
                    </motion.div>
                    <motion.div className=''  whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
                        <Link href={'rentals'} className='bg-white text-primary py-4 px-6 md:px-8 font-semibold rounded'>Explore Rentals</Link>
                    </motion.div>
                    
                    {/* <ButtonLinkOrange href={"#"} name={'Book A Call'}/>
                    <ButtonLinkWhite href={"#"} name={'Explore Rentals'}/> */}
                </div>
            </motion.div>

             {/* scroll top */}
            <div className='absolute bottom-4  md:bottom-5 justify-center flex  items-center w-full'>
                <ScrollTo
                    to="about"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="bg-darkgray/60 animate-bounce p-5 rounded-full w-auto inline-block -translate-x-1/2 cursor-pointer"
                > 
                    <AiOutlineDown size={20} className=' text-white' />
                </ScrollTo>
            </div>
   

            {/* carousel */}
            <div className='absolute bottom-10 right-5 w-1/2 h-auto z-10 overflow-hidden hidden lg:flex'>
                <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={20} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }} 
                navigation 
                loop={true} 
                className="mySwiper"


                >
                    {
                        heroDisplay.map((slide, index) => (
                            <SwiperSlide key={index}>
                                < div className=" h-full  relative overflow-hidden text-center justify-center items-center flex flex-col">

                                    <div className="h-[40vh] text-lightgray bg-darkgray/40 w-full flex justify-center items-center gap-4 px-4 ">
                                        <div className=' w-1/2'>
                                            <p className="text-3xl font-bold font-serif">{slide.title}</p>
                                            <p className="py-2 text-lg">{slide.desc}</p>
                                        </div>
                                        <div className="w-1/2 gap-2 flex rounded p-2">
                                            <p className=" w-full h-40 rounded-lg">
                                                <Image src={slide.image} alt={'image'} className='h-full w-full object-cover rounded-lg'/>
                                            </p>
                                            <p className="w-full h-40 rounded-lg">
                                                <Image src={slide.image2} alt={'image'} className='h-full w-full object-cover rounded-lg'/>
                                            </p>
                                        </div>
                                    </div>
                                
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
        

        {/* about us */}
        <motion.section  className='px-5 md:px-10 lg:px-20 py-10 md:py-30' id='about'>
            <motion.div  
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ amount: 0.3 }} 
                // variants={fadeInVariants} 

                // {...{ ...fadeIn, transition: { delay: 0.5 } }}
                {...fadeIn}
                className='flex flex-col md:flex-row justify-center items-center mx-auto gap-7 lg:gap-10'>
                <m.div 
                    
                    className='space-y-4 md:w-1/2'>
                    <p className='text-2xl md:text-4xl font-bold'>At EventsByOTH</p>
                    <Image src={icon} alt='serviceicon'/>
                    <p className='text-lg py-5 text-justify ld:text-start'>we specialize in curating exceptional events and offering premium rentals. Whether you're planning a wedding, birthday, or corporate event, we handle the details so you can enjoy the moment.</p>
                    {/* <ButtonLinkOrange href='about-us' name={'Learn more'}/> */}
                    <div className='hidden md:flex '>
                        <Link href={'about-us'} className='bg-primary text-white p-3 px-8 font-semibold rounded'>Learn More</Link>
                    </div>
                </m.div>
                <div className='md:w-1/2 w-full py-5'>
                    <m.div className='flex gap-3 sm:gap-4'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-3/4'>
                                <span className='w-full h-30 sm:h-56 overflow-hidden rounded'>
                                    <Image src={frame1} alt='frame' className='h-full w-full object-cover rounded'/>
                                </span>
                                <span className='w-full h-30 sm:h-56 overflow-hidden rounded'>
                                    <Image src={frame2} alt='frame' className='h-full w-full object-cover rounded'/>
                                </span>
                            {/* <Image src={frame1} alt='frame' className='h-full w-full'/>
                            <Image src={frame2} alt='frame' className='h-full w-full'/> */}
                        </div>
                        <div className=' h-60 sm:h-96 w-3/4 relative overflow-hidden rounded-lg'>
                            {/* <span className="border h-80 w-full "> */}
                                <Image src={frame3} alt='frame' className='h-full w-full absolut object-cover rounded-lg'/> 
                            {/* </span> */}
                            {/* <Image src={frame3} alt='frame' className='h-full w-full'/> */}
                        </div>
                    </m.div>
                </div>
            </motion.div>
        </motion.section>
        

        {/* our expertise */}
        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 

            // {...{ ...fadeIn, transition: { delay: 0.5 } }}
            {...fadeIn}
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30'
            >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">
                Our Expertise
            </h1>
            <SplitScreenCarousel/>
        </motion.section>

        {/* book ticket */}
        <motion.section

            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            {...{ ...fadeIn, transition: { delay: 0.5 } }}
            className=' pt-30'>

           <Bookticket/>
           
        </motion.section>

        {/* contact us */}
        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            // {...{ ...fadeIn, transition: { delay: 0.5 } }}
            {...fadeIn}
            className='h-full md:min-h-[90vh] bg-darkgray overflow-hidden p-5 md:p-10 lg:p-20'>
            <p className=' text-lg sm:text-2xl pb-6 lg:pb-16 text-white md:text-4xl font-bold '>Will You love to reach out to us?</p>
            <div className=' h-full flex flex-col lg:flex-row justify-center items-center mx-auto gap-20 '>
                <div className='md:w-1/2 '>
                    <div className='min:h-[50vh] w-full overflow-hidden rounded-lg'>
                        <Image src={contactImg} alt='contact' className='w-full h-full object-cover  rounded-lg'/>
                    </div>
                </div>

                <div className='space-y-4  md:w-1/2 w-full  my-5'>
                    <p className='text-white text-lg md:text-2xl'>Tell us what you have in mind</p>
                    <form className='space-y-5 mb-5'>
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
                        <div>
                            <ButtonLinkWhite href={'#'} name={'Get Intouch'}/>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>

    </Fragment>
  )
}

export default HeroHome;