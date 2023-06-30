import { topPicks, } from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
    return (
        <>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top picks</h1>
            <div className='lg:flex max-w[1200px] sm:w-[100%] md:w-[80%] m-auto py-2 px-2'>
                <Splide options={{
                    // perPage: 4,
                    gap: 30,
                    updateOnMove: true,
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    focus: 'center',
                    breakpoints: {
                        780: {
                            perPage: 2,
                        },
                    },
                    drag: 'free',
                    arrows: false,
                    // clones: 3,
                    // focus: 'center',
                }} >
                    {
                        topPicks.map((item, index) => {
                            return (
                                <SplideSlide key={`topPick${index}`}>

                                    <div className='rounded-3xl relative shadow-md'>
                                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                                            <p className='px-2 font-bold text-2xl pt-4 capitalize'>{item.title}</p>
                                            <p className='px-2'>{item.price}</p>
                                            <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to cart</button>
                                        </div>
                                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-500' src={item.img} alt={item.title} />
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>

            </div >


        </>
    )
}

export default TopPicks