import React from 'react'
import Image from "next/image";

const Background = () => {
    return (
        <>
            <div className="relative" id="#home">
                <Image className="w-full h-[625px]  lg:h-[500px]" src="/mar.png" alt="Pousada Logo" width={1519} height={800} />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2  bg-green-950 bg-opacity-50 p-10 text-center">
                    <h1 className="text-2xl md:text-3xl text-white font-bold">Pousada da Montanha</h1>
                    <p className="text-1xl md:text-2xl mt-3 md:mt-14 text-white">Venha conhecer a melhor pousada da Região</p>
                </div>
            </div>
        </>
    )
}

export default Background