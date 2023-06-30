import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Featured = () => {
    const sliders = [
        { url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg' },
        { url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/pizza_osjb4f.jpg' },
        { url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/ric_a4ewxo.jpg' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
        console.log(`current index ${currentIndex} and sliders length ${sliders.length - 1}`)
        if (currentIndex < sliders.length - 1)
            setCurrentIndex(currentIndex + 1);
        else
            setCurrentIndex(0)


    }
    const prev = () => {
        if (currentIndex > 0)
            setCurrentIndex(currentIndex - 1);
        else
            setCurrentIndex(sliders.length - 1)

    }
    return (
        <div className='max-w[1200px] sm:w-[100%] sm:px-0.5 lg:w-[80%] mx-auto h-[700px]  py-4 px-4 relative'>
            <div style={{ backgroundImage: `url(${sliders[currentIndex].url})` }} className='w-full h-full bg-black rounded-xl bg-center bg-cover duration-500 relative'>

                <div onClick={prev} className='shadow-sm absolute top-[50%] left-0 text-white z-30 sm:mx-2 md:mx-10 fold:mx-0 bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full'>
                    <BsChevronLeft size={25} className=' text-white' />
                </div>
                <div onClick={next} className='shadow-sm absolute top-[50%] right-0 text-white z-30 sm:mx-2 md:mx-10 fold:mx-0 bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full'>
                    <BsChevronRight size={25} className=' text-white' />
                </div>
                <div className='absolute bottom-3 w-[100%] flex items-center justify-center gap-2'>
                    {
                        sliders.map((item, index) => {
                            return <span key={`index ${index}`} onClick={() => setCurrentIndex(index)} className={`h-4 w-4 rounded-full bg-orange-500 shadow-md flex items-center justify-center`}>
                                <span className={`${index === currentIndex ? 'h-2 w-2 rounded-full bg-white shadow-md ' : 'hidden'}`}></span>
                            </span>
                        })
                    }
                    {/* <span className='h-4 w-4 rounded-full bg-rose-600 shadow-md'> </span>
                    <span className='h-4 w-4 rounded-full bg-rose-600 shadow-md'> </span> */}
                </div>
            </div>
        </div>
    )
}

export default Featured