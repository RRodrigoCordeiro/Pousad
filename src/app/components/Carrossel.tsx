'use client'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'


import Image1 from '../../../public/image/depoimentoCarla.png'
import Image2 from '../../../public/image/depoimentoFelipe.png'
import Image3 from '../../../public/image/depoimentoPedro.png'
import Image4 from '../../../public/image/depoimentorRafael.png'
import Image5 from '../../../public/image/depoimentoFernanda.png'
import Image6 from '../../../public/image/depoimentoCamila.png'
import Image7 from '../../../public/image/depoimentoThiago.png'
import Image8 from '../../../public/image/depoimentoAna.png'
import Image9 from '../../../public/image/depoimentoCarolina.png'
import Image10 from '../../../public/image/depoimentoBruno.png'


const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]


const Carrossel = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)
    const controls = useAnimation();

    useEffect(() => {
        if (carousel.current) { 
            const carouselElement = carousel.current;
            setWidth(carouselElement.scrollWidth - carouselElement.offsetWidth);
        }
    }, [carousel.current]);

    useEffect(() => {
        if (width > 0) {
            controls.start({
                x: [0, -width], 
                transition: {
                    duration: images.length * 2,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        }
    }, [width, controls]);


    return (
        <div className="w-full mx-auto h-[50vh]   mb-1 flex items-center justify-center max-w-[900px]">
            <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className='flex'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    animate={controls}
                >
                    {images.map((image,index) => (
                        <motion.div className='min-h-[200px] min-w-[400px] p-3.5' key={index}>
                            <Image className="w-full h-[50%] rounded-[12px] pointer-events-none " src={image} alt="Pousada Logo" width={200} height={80} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carrossel