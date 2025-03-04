'use client'
import React,{useState} from 'react'
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import rent4Img from '../../../public/assets/img/r1.webp'
import rent5Img from '../../../public/assets/img/r2.webp'
import rent6Img from '../../../public/assets/img/r3.webp'
import doneIcon from '../../../public/assets/img/done.png'

import { motion } from 'framer-motion';
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/rentals.webp'
import  planImg from '../../../public/assets/img/planNextEvent.png'
import { fadeInVariants } from '../page'
import { fadeIn } from '@/shared/GlobalAnimation'
import Link from 'next/link'
import CalendlyPopup from '@/components/CalendlyEmbed'
import ModalComponent from '@/components/ModalComponent'
import { ButtonLinkOrange } from '@/shared/ButtonLink'
import useFadeIn from '@/shared/GlobalAnimation';
import { CiCircleMinus, CiSquarePlus } from 'react-icons/ci'
import DoneModalComponent from '@/components/DoneModal'

const MotionImage = motion(Image); 

export const rentalData = [
    {
        id: 1,
        image: rent1Img,
        title: "Crockeries",
        price: '20,303',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        id: 2,
        image: rent5Img,
        title: "Foam Sticks",
        price: '20,039',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        id: 3,
        image: rent3Img,
        title: 'Sashes',
        price: '400,303',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        id: 4,
        image: rent4Img,
        title: 'After Party Props',
        price: '400,303',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        id: 5,
        image: rent2Img,
        title: 'Gold Chiavari Chair',
        price: '400,303',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        id: 6,
        image: rent6Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: '#',
        desc: "erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    }
]

const initialState = {
    date: "",
    desc: "",
    location: "",
    name: "",
    email: "",
    phone_number: ''
}

const page = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [checkoutItem, setCheckoutItem] = useState(null)
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false)

    const [step, setStep] = useState(1)
    const [formState, setFormState] = useState(initialState);
    const [doneModal, setDoneModal] = useState(false)

    const handleNext = () => {
        setStep((p) => p + 1)
    }


    const handleChange = () => {
        setFormState({...formState, [e.target.name]: e.target.value })
    };

   

    const fadeIn = useFadeIn(0.5);

    const handleModal = (card) => {
        setSelectedCard(card);
        setOpenModal(true);
        // console.log(card)
    };
    
    const closeModal = () => {
        setSelectedCard(null);
        setOpenModal(false);
    };

    const handleCheckoutModal = (card) => {
        setCheckoutItem(card);
        setOpenCheckoutModal(true);
        // console.log(card)
    };
    
    const closeCheckoutModal = () => {
        setCheckoutItem(null);
        setOpenCheckoutModal(false);
    };


    const closeDoneModal = () => {
        setDoneModal(false)

    }

    const handleSubmit =() => {
        setDoneModal(true)
    };


  return (
    <>
        <section>
            <HeroComponent title={'Rentals'} image={heroImg}/>
        </section>

        <motion.section            
         id='rentals'className='px-5 md:px-10 lg:px-20 py-10 md:py-30 bg-lightgray'
         >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Rentals  </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    rentalData.map((item) => {
                        return (
                            <motion.div
                    
                                key={item.id} className='h-[70vh] gap-4 rounded-lg overflow-hidden bg-white' onClick={() => handleModal(item)}  >
                                <motion.div
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ type: "keyframes", stiffness: 300 }} 
                                    className='bg-white border h-2/3'>
                                    <Image src={item.image} alt='rental' className='h-full w-full object-cover rounded-lg'/>
                                </motion.div>
                                <div className='h-full px-3 '>
                                    <h2 className='text-lg font-semibold py-2'>{item.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <div className='rounded flex justify-center items-center text-center border border-primary w-full' >
                                            <button className='p-3 bg-white text-primary border-primary rounded '>Rent Now</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
             {/* modal */}
             <ModalComponent isOpen={openModal} onClose={closeModal}>
                {selectedCard ? (
                   <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
                        <div className='w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[64vh] relative rounded-lg m-5 min-h-full overflow-hidden  lg:flex'>
                       
                            <MotionImage 
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                                src={selectedCard.image} alt='image-' className='h-full w-full object-cover rounded-lg absolute z-10 inset-0 '/>
            
                        
                        </div>
                    {/* <div className='w-1/2 border min-h-[100%]'> */}
                        <div className='w-full lg:w-1/2'>
                        <p className='text-xl md:text-[28px] font-bold py-2'>{selectedCard?.title}</p>
                        <p className='text-neutral py-2 text-normal md:text-2xl'>{selectedCard?.desc}</p>
                        {/* <p className='font-semibold py-2'>{selectedCard.details.title}</p> */}
                      
                        <div className='flex justify-end my-5' onClick={() => handleCheckoutModal(selectedCard)}>
                            <button className='bg-primary text-white py-4 px-8 font-semibold rounded'>Rent now</button>
                        </div>
                        </div>

                    {/* </div> */}
                   </div>
                    
                ):
                <p>No card selected</p>  
            }
            </ModalComponent>
            <div className="text-center pt-10 font-semibold">
                <Link href ="/rentals" className="text-primary text-xl">Load More</Link>
            </div>
        </motion.section>

        {/* next event */}
        <motion.section  {...fadeIn}  className='pt-10 md:pt-30 h-full'>
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

        {/* checkoutModal */}
        <ModalComponent isOpen={openCheckoutModal} onClose={closeCheckoutModal}>
                {checkoutItem ? (
                   <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 md:h-full'>
                        <div className='w-full md:w-1/2 relative rounded-lg p-5 overflow-hidden'>
                       
                           <h1 className='text-xl md:text-[28px] font-semibold text-[#2C2C2C] py-5'>Rental Booking</h1>
                           <h4 className='text-[#6D6D6D] text-normal md:text-2xl'>Choose Date and time for this event</h4>
                           <div className='flex justify-between pt-10'>
                                <div className="flex gap-4">
                                    <span className="h-20 w-20 overflow-hidden rounded-lg">
                                        <Image src={checkoutItem.image} alt='image'/>
                                    </span>
                                    <span className='font-bold'>{checkoutItem.title}</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <CiCircleMinus size={20}/>
                                    1
                                    <CiSquarePlus size={20}/>
                                </div>
                           </div>
                        
                        </div>

                        {/* {} */}
                        <div className="w-full md:w-1/2 p-5">
                            <form>
                                <div className=''>
                                    {/* step -1 */}
                                    {step === 1 && (
                                        <div className="space-y-4">
                                            <div>
                                                {/* <label className="block mb-2">Date</label> */}
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formState.date}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='choose date'
                                                />
                                            </div>
                                            <div>
                                                {/* <label className="block mb-2">Date</label> */}
                                                <textarea
                                                    type="text"
                                                    name="desc"
                                                    value={formState.desc}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='tell us about your event'
                                                />
                                            </div>
                                            <div>
                                                {/* <label className="block mb-2">Date</label> */}
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formState.location}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='where do you want the rentals delivery?'
                                                />
                                            </div>
                                            <div className='flex justify-center my-5 ' onClick={handleNext}>
                                                <button className='bg-primary text-white py-4 px-8 font-semibold rounded w-full'>Continue</button>
                                            </div>

                                        </div>
                                    )}

                                    {/* step-2 */}
                                    {step === 2 && (
                                        <div className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='Enter Name'
                                                />
                                            </div>
                                            
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='Enter Email'
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="text"
                                                    name="phone_number"
                                                    value={formState.phone_number}
                                                    onChange={handleChange}
                                                    className="w-full border border-primary p-3 rounded"
                                                    placeholder='Enter Phone number'
                                                />
                                            </div>

                                            <div className='flex justify-end my-5' onClick={()=> handleSubmit()}>
                                                <button className='bg-primary text-white py-4 px-8 font-semibold rounded w-full'>Book Now</button>
                                            </div>

                                        </div>
                                    )}
                                
                                </div>
                            </form>
                        </div>
                   </div>
                    
                ):
                <p>No card selected</p>  
            }
        </ModalComponent>

        {/* done modal */}
        <DoneModalComponent isOpen={doneModal} onClose={closeDoneModal}>
            <div className=' flex flex-col h-full justify-center items-center p-3 text-center'>
                <span className="h-20 w-20 overflow-hidden rounded-lg">
                    <Image src={doneIcon} alt='image'/>
                </span>
                <p className="font-semibold py-4 md:text-[30px]">Your rental booking is confirmed</p>
                <p className="text-[#6D6D6D] text-base">Thank you for choosing PartyWithOTH. Our team will review your request and get in touch with you shortly to finalize the details.</p>
                <div className='flex justify-center my-5 w-full' onClick={closeDoneModal}>
                    <button className='bg-primary text-white py-4 px-8 font-semibold rounded w-full'>Close</button>
                </div>
            </div>
        </DoneModalComponent>

    </>
  )
}

export default page