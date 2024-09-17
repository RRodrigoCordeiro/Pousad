import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CabecalhoPaginacao from '../components/CabecalhoPaginacao'
import Background from '../components/Background'
import Rodape from '../components/Rodape'

const page = () => {
    return (
        <>
            <CabecalhoPaginacao />
            <Background />
            <h1 className="text-center font-bold mt-11 text-1xl lg:text-2xl">Escolha o quarto ideal para a sua Hospedagem</h1>
            <h2 className="text-center mt-11 text-green-900 text-1xl  lg:text-2xl">Opções disponíveis no momento:</h2>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-8">
                <Link href="/reservaIndividual">
                    <Image
                        src="/QuartoIndividual.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[290px] h-[300px] mt-20 hover:scale-110 duration-300 "
                    />
                    <p className="text-center mt-8"><span className="text-green-900">Capacidade Máxima:</span> 4 pessoas</p>
                </Link>
                <Link href="/reserva">
                    <Image
                        src="/QuartoCasal.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[290px] h-[300px] mt-20 hover:scale-110 duration-300 "
                    />
                    <p className="text-center mt-8"><span className="text-green-900">Capacidade Máxima:</span> 8 pessoas</p>
                </Link>
                <Link href="/reserva">
                    <Image
                        src="/QuartoTematico.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[290px] h-[300px] mt-20 hover:scale-110 duration-300"
                    />
                    <p className="text-center mt-8"><span className="text-green-900">Capacidade Máxima:</span> 8 pessoas</p>
                </Link>
            </div>
            <Rodape />
        </>
    )
}

export default page