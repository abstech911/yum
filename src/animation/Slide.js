import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


/**
 *This is an animated component with the function to slide
 *
 * @abstech911 as the one who wrote this 
 * 
 * @props.children is the children
 * @return {*} 
 */
const Slide = (props) => {

    const direction = props.direction ?? 1;
    const distance = props.distance ?? 200;

    console.log(props.className)
    return (
        props.active && (<AnimatePresence>
            <motion.div
                exit={{ opacity: 0, x: direction * (distance * -1) }}
                initial={{ opacity: 0, x: direction * distance }}
                animate={{ opacity: 1, x: 0 }}
                className={props.className}
            >
                {props.children}
                {direction}
            </motion.div>
        </AnimatePresence>)
    )
}


export default Slide;