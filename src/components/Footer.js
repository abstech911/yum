import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaTwitch } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 md:text-center items-center justify-center mx-auto'>
                <div>
                    <h1 className='w-full text-3xl text-orange-500'>YumEats</h1>
                    <p className='md:text-center'>
                        Elit non aliquip laborum sint dolore minim.
                        Ex commodo officia tempor consectetur.
                        Qui aute enim ex duis irure
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6 mx-auto'>
                        <FaFacebookSquare size={30} />
                        <FaDribbbleSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaTwitterSquare size={30} />
                        <FaTwitch size={30} />
                    </div>
                </div>

                <div className='lg:col-span-2 flex justify-between mt-6 md:text-center'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>London</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>London</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>London</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>London</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer