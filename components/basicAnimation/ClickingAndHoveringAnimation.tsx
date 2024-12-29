import React from 'react'
import * as motion from 'motion/react-client';

function ClickingAndHoveringAnimation({ childVariants }: {
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
            <motion.button
            className='bg-slate-200 text-background py-5 px-10 rounded-xl font-bold'
                whileTap={{scale: 0.9}}
                whileHover={{
                    scale: 1.1,
                    background: "#171717",
                    color: "#F7F7F7",
                }}
                transition={{bounceDamping: 10, bounceStiffness: 600}}
            >click Me</motion.button>
        </motion.div>
    )
}

export default ClickingAndHoveringAnimation