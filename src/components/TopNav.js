import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs';

import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'
const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);
    console.log(sideNav);
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center '>
                <div className='flex items-center gap-2'>
                    <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                    <span className='text-xs font-bold sm:text-xl'>Yum <span>Eats</span></span>
                    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] gap-1'>
                        <p className='bg-orange-700 text-white rounded-full text-bold p-2'>Free</p>
                        <p>Delivery</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2.5 w-[90%] mx-auto focus:outline-none focus:border-none ' type='text' placeholder='Search meal' />
            </div>
            <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full border-none shadow-sm'>
                <BsFillCartFill size={20} /> Cart
            </button>

            {sideNav === true && (
                <>
                    <div onClick={() => setSideNav(false)} className='bg-black/60 fixed w-full h-screen z-40 top-0 left-0'>

                    </div>
                    <div className='fixed top-0 left-0 w-[70%] md:w-[40%]  lg:w-[30%] h-screen bg-white z-[45] duration-500'>
                        <div onClick={() => setSideNav(!sideNav)}>

                            <AiOutlineClose className='absolute right-2 top-7' onClick={() => setSideNav(!sideNav)} size={25} />
                            <p className='text-2xl px-4 py-6'>Yum <span className='text-orange-700 font-bold'>Eats</span></p>
                            <nav>
                                <ul className='flex flex-col p-4 text-gray-900'>
                                    <li className='text-md  flex cursor-pointer  p-3 rounded-md my-3'>
                                        <BsPerson size={25} className='mr-4 text-white bg-black rounded-full p-1 shadow-sm ' />
                                        My Account
                                    </li>
                                    <li className='text-md  flex cursor-pointer  p-3 rounded-md my-3 '>
                                        <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full p-1 shadow-sm' />
                                        Delivery
                                    </li>
                                    <li className='text-md  flex cursor-pointer  p-3 rounded-md my-3 '>
                                        <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full p-1 shadow-sm' />
                                        My Favorite
                                    </li>
                                    <li className='text-md  flex cursor-pointer  p-3 rounded-md my-3 '>
                                        <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full p-1 shadow-sm' />
                                        My Wallet
                                    </li>
                                    <li className='text-md  flex cursor-pointer  p-3 rounded-md my-3 '>
                                        <MdHelp size={25} className='mr-4 text-white bg-black rounded-full p-1 shadow-sm' />
                                        Help
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </>

            )}

        </div>
    )
}

export default TopNav