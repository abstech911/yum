import React from 'react';
import { categories } from '../data/data'

const Category = () => {
    console.log(categories)
    return (
        <div className='max-w-[1200px] sm:w-[100%] sm:px-0.5 lg:w-[80%] mx-auto py-12 px-4 '>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Category</h1>
            <div className='grid sm:grid-cols-3 gird-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
                {
                    categories.map((item, index) => {
                        return <div key={`category ${index}`} className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                            <img className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl' src={item.image} alt={item.name} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category