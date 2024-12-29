// import React from 'react'
// import {motion} from 'framer-motion'

// function BasicAnimation() {
//   return (
//     <main className='flex flex-col gap-10 overflow-x-hidden'>
//         <motion.section 
//             variants={{
//                 hidden: {opacity: 0},
//                 visible: {
//                     opacity: 1,
//                     transition: {
//                         staggerChildren: 0.25
//                     }
//                 }
//             }}
//             initial="hidden"
//             animate="visible"
//             className='grid grid-cols-3 p-10 gap-10'
//         >
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//             <div className='aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800'></div>
//         </motion.section>
//     </main>
//   )
// }

// export default BasicAnimation

import React from 'react';
import * as motion from 'motion/react-client';
import UpDownAnimation from '@/components/basicAnimation/UpDownAnimation';
import TransformAnimation from '@/components/basicAnimation/TransformAnimation';
import ClickingAndHoveringAnimation from '@/components/basicAnimation/ClickingAndHoveringAnimation';
import DragObject from '@/components/basicAnimation/DragObject';
import ScrollEffect from '@/components/basicAnimation/ScrollEffext';

function BasicAnimation() {
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <main className="flex flex-col gap-10 overflow-x-hidden">
            <motion.section
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 p-10 gap-10"
            >
                <UpDownAnimation childVariants={childVariants}/>
                <TransformAnimation childVariants={childVariants} />
                <ClickingAndHoveringAnimation childVariants={childVariants} />
                <DragObject childVariants={childVariants} />
                {/* <ScrollEffect childVariants={childVariants} />
                <motion.div
                    variants={childVariants}
                    className="aspect-square rounded-xl flex items-center justify-center gap-10 bg-slate-800"
                ></motion.div> */}
            </motion.section>
        </main>
    );
}

export default BasicAnimation;
