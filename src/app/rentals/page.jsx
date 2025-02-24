'use client'
import React from 'react'
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import rent4Img from '../../../public/assets/img/r1.webp'
import rent5Img from '../../../public/assets/img/r2.webp'
import rent6Img from '../../../public/assets/img/r3.webp'

import { motion } from 'framer-motion';
import { Button, ButtonLinkOrange } from '@/shared/ButtonLink'
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/rentals.webp'
import  planImg from '../../../public/assets/img/planNextEvent.png'
import { fadeInVariants } from '../page'
import { fadeIn } from '@/shared/GlobalAnimation'
import Link from 'next/link'
import CalendlyPopup from '@/components/CalendlyEmbed'

export const rentalData = [
    {
        id: 1,
        image: rent1Img,
        title: "Crockeries",
        price: '20,303',
        btnText: '#'
    },
    {
        id: 2,
        image: rent5Img,
        title: "Foam Sticks",
        price: '20,039',
        btnText: '#'
    },
    {
        id: 3,
        image: rent3Img,
        title: 'Sashes',
        price: '400,303',
        btnText: '#'
    },
    {
        id: 4,
        image: rent4Img,
        title: 'After Party Props',
        price: '400,303',
        btnText: '#'
    },
    {
        id: 5,
        image: rent2Img,
        title: 'Gold Chiavari Chair',
        price: '400,303',
        btnText: '#'
    },
    {
        id: 6,
        image: rent6Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: '#'
    }
]

const page = () => {
  return (
    <>
        <section>
            <HeroComponent title={'Rentals'} image={heroImg}/>
        </section>

        <motion.section
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            
         id='rentals'className='px-5 md:px-10 lg:px-20 py-10 md:py-30 bg-lightgray'
         >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Rentals  </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    rentalData.map((item) => {
                        return (
                            <motion.div
                                // initial="hidden"
                                // whileInView="visible"
                                // viewport={{ amount: 0.3 }} 
                                // variants={fadeInVariants}  
                                // {...{ ...fadeIn, transition: { delay: 0.5 } }}
                                key={item.id} className='h-[70vh] gap-4 rounded-lg overflow-hidden bg-white'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ type: "keyframes", stiffness: 300 }} 
                                    className='bg-white border h-2/3'>
                                    <Image src={item.image} alt='rental' className='h-full w-full object-cover rounded-lg'/>
                                </motion.div>
                                <div className='h-full px-3 '>
                                    <h2 className='text-lg font-semibold py-2'>{item.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        {/* <p className='text-neutral'>${item.price}</p> */}
                                        {/* <div className='capitalize'>
                                            <Button name={item.btnText}/>
                                        </div> */}
                                        <div className='py-3 rounded flex justify-center items-center text-center border border-primary w-full'>
                                            <Link href={item.btnText} className='text-primary rounded h-full w-full'>Rent Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
            <div className="text-center pt-10 font-semibold">
                <Link href ="/rentals" className="text-primary text-xl">Load More</Link>
            </div>
        </motion.section>

        {/* next event */}
        <motion.section {...{ ...fadeIn, transition: { delay: 0.5 } }}  className='pt-10 md:pt-30 h-full'>
            {/* <div className='flex h-full items-center'> */}
                <div className='flex flex-col md:flex-row w-full h-full justify-between'>  
                    <div className='h-[70vh] w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className='text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        {/* <ButtonLinkOrange href={`#`} name={'Book a Call'}/> */}
                        <CalendlyPopup title="Book a Call"/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[70vh] relative order-first md:order-last'>
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