import React from 'react';


const Delivery = () => {
    return (
        <div className='max-w[1200px] sm:w-[100%] sm:px-0.5 lg:w-[80%] mx-auto h-auto  py-4 px-4 relative bg-white'>
            <h3 className='text-orange-500 font-bold text-xl text-center'>Quick Delivery App</h3>
            <div className='mx-auto grid grid-cols-2 gap-2 py-8'>
                <img className=' h-auto mx-auto my-4 bg-cover bg-center' src='https://picsum.photos/400/400' alt='' />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-2xl'>Get the App</p>
                    <h1 className='text-xl md:text-2xl  font-medium py-2'>Limitless Convenience on-demand</h1>
                    <p>
                        Qui nulla aute sit excepteur ut pariatur amet elit officia reprehenderit anim duis.
                        Laborum velit consectetur commodo velit reprehenderit eiusmod
                        id commodo voluptate aliqua irure dolore mollit.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Delivery