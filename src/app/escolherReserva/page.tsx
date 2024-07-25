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
            <h1 className="text-center font-bold mt-11 text-2xl">Escolha o quarto ideal para a sua Hospedagem</h1>
            <h2 className="text-center mt-11 text-blue-500 font-bold">Opções disponíveis no momento:</h2>
            <div className="flex flex-row justify-center space-x-44">
                <Link href="#">
                    <Image
                        src="/QuartoIndividual.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[350px] h-[300px] mt-20 hover:scale-110 duration-300 "
                    />
                </Link>
                <Link href="/reserva">
                    <Image
                        src="/QuartoCasal.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[350px] h-[300px] mt-20 hover:scale-110 duration-300 "
                    />
                </Link>
                <Link href="/reserva">
                    <Image
                        src="/QuartoTematico.jpg"
                        alt="Imagem do Quarto Individual"
                        width={510}
                        height={10}
                        className=" w-[350px] h-[300px] mt-20 hover:scale-110 duration-300"
                    />
                </Link>
            </div>
            <div className="text-center flex flex-row  justify-evenly mt-10">
                <p><span className="text-blue-500 font-bold">Capacidade Máxima:</span> 4 pessoas</p>
                <p><span className="text-blue-500 font-bold">Capacidae Máxima:</span> 8 pessoas</p>
                <p><span className="text-blue-500 font-bold">Capacidade Máxima:</span> 8 pessoas</p>
            </div>
            <Rodape />
        </>
    )
}

export default page