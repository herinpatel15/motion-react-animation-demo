import React from 'react'
import * as motion from 'motion/react-client';

function TransformAnimation({childVariants}: {
    childVariants: {
        hidden: { opacity: number, scale: number },
        visible: { opacity: number, scale: number },
    }
}) {
    return (
        <motion.div
            variants={childVariants}
            className="aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800"
        >
            <motion.div
                className='w-1/3 h-1/3 shadow-md bg-slate-200'
                // add keyframe multiple keyframe can be add
                animate={{
                    scale: [1, 2, 2, 1],
                    rotate: [0, 90, 90, 0],
                    borderRadius: ["10%", "50%", "10%", "10%"],
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: 2,
                    repeatDelay: 1
                }}
            ></motion.div>
        </motion.div>
    )
}

export default TransformAnimation