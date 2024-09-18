import React from 'react'
import Image from "next/image";
import Link from "next/link";

const CabecalhoPaginacao = () => {
    return (
        <>
            <div className='container mx-auto flex justify-between items-center mt-3 sm:container sm:flex flex-col  md:flex md:flex-row'>
                <div className="flex items-center ">
                    <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
                    <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
                </div>
                <Link href="/"><Image className="w-[50px] h-[50px] mr-4 hover: cursor-pointer" src="/seta.png" alt="Pousada Logo" width={100} height={80} /></Link>
            </div>
        </>
    )
}

export default CabecalhoPaginacao