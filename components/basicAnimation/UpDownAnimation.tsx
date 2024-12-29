import React from 'react'
import * as motion from 'motion/react-client';

function UpDownAnimation({childVariants}: {
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
                className='w-20 h-20 bg-slate-200 rounded-lg'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            ></motion.div>
            <motion.div
                className='w-20 h-20 bg-slate-200 rounded-full'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            ></motion.div>
        </motion.div>
    )
}

export default UpDownAnimation