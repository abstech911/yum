import React, { useCallback, useState } from 'react'
import { mealData } from '../data/data';
import { FaArrowRight } from 'react-icons/fa6'
const Meal = () => {
    const [food, setFood] = useState(mealData);

    const filterCategory = useCallback((category) => {

        if (category.toLowerCase() === "all") {
            setFood(mealData)
            console.log('if', food, "meal data ", mealData);

        } else {
            setFood(
                mealData.filter(item => {
                    return item.category === category.toLowerCase();
                })

            )
            console.log('else', food);
        }
    }, [food])

    return (
        <div className='max-w-[1200px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-4'>
                Our Meal
            </h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center gap-2'>
                    <button onClick={() => filterCategory("All")} className='bg-orange-700 m-1 shadow-sm border-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-700'>All</button>
                    <button onClick={() => filterCategory("Pizza")} className='bg-orange-700 m-1 shadow-sm border-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-700'>Pizza</button>
                    <button onClick={() => filterCategory("Chicken")} className='bg-orange-700 m-1 shadow-sm border-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-700'>Chicken</button>
                    <button onClick={() => filterCategory("Salad")} className='bg-orange-700 m-1 shadow-sm border-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-700'>Salad</button>
                </div>

            </div>
            <div className='pt-3 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-3'>
                {
                    food.map((item, index) => {
                        return <div key={`some ${index}`} className='border-none hover:scale-105 duration-300 gap-6 shadow-lg bg-white w-[90%] mx-auto my-4'>
                            <img className='w-full h-[200px] object-cover rounded-lg filter' src={item.image} alt='' />
                            <div className='flex justify-between py-2 px-4 items-center'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-700 h-14 w-16 rounded-full inline-flex items-center justify-center -mt-10 text-white py-4 px-2 border-8 border-gray-600 font-bold'>{item.price}</p>
                            </div>

                            <div className='pl-4 py-1'>
                                <p className='flex items-center justify-start gap-5 pb-5'>View More <FaArrowRight /> </p>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Meal