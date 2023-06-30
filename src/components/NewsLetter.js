import React from 'react'

const NewsLetter = () => {
    return (
        <div className='max-w-[1200px] m-auto text-white px-4 bg-[#24262b]'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1>Need advice on how to improve your flow?</h1>
                    <p>Sign up to join our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black focus:border-none focus:outline-none ' type='email' placeholder='Email' />
                        <button className='bg-orange-500 text-white rounded-md font-medium w-[200px] ml-4 my-6 py-3 px-6 border-none'>
                            Notify me
                        </button>

                    </div>
                    <p>we are concerned about the security of your data, Read{" "}
                        <span className='text-orange-600 cursor-pointer'>Privacy Policy</span>
                    </p>
                </div>
                <hr className='my-8 bg-gray-700 border-white' />
            </div>
        </div>
    )
}

export default NewsLetter