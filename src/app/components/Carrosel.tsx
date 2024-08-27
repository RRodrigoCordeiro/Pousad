'use client'
import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


import Image1 from '../../../public/depoimentoCarla.png'
import Image2 from '../../../public/depoimentoFelipe.png'
import Image3 from '../../../public/depoimentoPedro.png'
import Image4 from '../../../public/depoimentorRafael.png'
import Image5 from '../../../public/depoimentoFernanda.png'
import Image6 from '../../../public/depoimentoCamila.png'
import Image7 from '../../../public/depoimentoThiago.png'
import Image8 from '../../../public/depoimentoAna.png'
import Image9 from '../../../public/depoimentoCarolina.png'
import Image10 from '../../../public/depoimentoBruno.png'


const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]


const Carrosel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    },[])
   

  return (
    <div className="w-full mx-auto h-[50vh]   mb-1 flex items-center justify-center max-w-[900px]">
        <motion.div ref={carousel}  className="cursor-grab overflow-hidden" whileTap={{cursor: "grabbing" }}>
            <motion.div className='flex' 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            >
                 {images.map(image => (
                    <motion.div className='min-h-[200px] min-w-[400px] p-3.5' key={image}>
                         <Image className="w-full h-[50%] rounded-[12px] pointer-events-none " src={image} alt="Pousada Logo" width={200} height={80} />
                    </motion.div>
                ))} 
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Carrosel