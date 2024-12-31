import React from 'react';
import { motion } from 'motion/react';

const CodeEditor = () => {
  return (
    <motion.div 
        className='h-[400px] w-[720px] flex items-center justify-center bg-gradient-to-br from-indigo-400 to-gray-700 rounded-lg'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 1}}
    >
        <div className='relative w-[98%] h-[97%] bg-black/70 backdrop-blur-md rounded-lg'>
            <div className='absolute flex-center top-0 z-10 h-8 w-full rounded-lg'>
                <div className='px-3 flex items-center justify-start gap-2'>
                    <div className='h-2 w-2 rounded-full bg-red-500' />
                    <div className='h-2 w-2 rounded-full bg-yellow-500' />
                    <div className='h-2 w-2 rounded-full bg-green-500' />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default CodeEditor
