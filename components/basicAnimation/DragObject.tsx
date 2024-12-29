import React from 'react'
import * as motion from 'motion/react-client';

function DragObject({childVariants}: {
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
                className='w-1/4 h-1/4 bg-slate-200 cursor-grab rounded-lg'
                drag
                dragConstraints={{
                    top: -125,
                    left: -125,
                    right: 125,
                    bottom: 125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            ></motion.div>
        </motion.div>
    )
}

export default DragObject