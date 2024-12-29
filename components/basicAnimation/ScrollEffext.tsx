'use client'
import React, { useRef } from 'react'
import * as motion from 'motion/react-client';
import { useScroll } from 'motion/react';
// import {motion, useScroll} from 'framer-motion'

function ScrollEffect({childVariants}: {
    childVariants: {
        hidden: { opacity: number, scale: number },
        visible: { opacity: number, scale: number },
    }
}) {

    // const ref = useRef(null);
    const {scrollYProgress: done} = useScroll()
    console.log(done);
    
    // const scaleY = useSpring(scrollYProgress)

    return (
        <motion.div
            variants={childVariants}
            className="aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800"
        >
            <motion.div
                className='aspect-square w-40 bg-slate-600 rounded-lg'
            >
                <motion.div
                    className='w-full bg-slate-200 rounded-lg h-full origin-bottom'
                    // ref={ref}
                    // style={{scaleY: "20%"}}
                    style={{scaleY: done}}
                ></motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ScrollEffect