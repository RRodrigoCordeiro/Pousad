import Image from "next/image";
import React from 'react'


const Cabecalho = () => {
  return (
    <>
        <header className=" text-black py-4  ">
            <div className="container mx-auto flex justify-between items-center  sm:container sm:flex flex-col  md:flex md:flex-row ">
              <div className="flex items-center ">
                <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
                <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
              </div>
              <nav>
                <ul className="flex space-x-3" >
                  <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                  <li><a href="#quartos" className="hover:text-gray-300">Quartos</a></li>
                  <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>
                  <li><a href="#localizacao" className="hover:text-gray-300">Localização</a></li>
                  <li><a href="#contato" className="hover:text-gray-300">Contato</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <div className="relative" id="#home">
            <Image className="w-[50] h-[625px]  lg:h-[500px]" src="/mar.png" alt="Pousada Logo" width={1519} height={800}  />
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-green-950 bg-opacity-50 p-10 text-center">
              <h1 className="text-3xl text-white font-bold">Pousada da Montanha</h1>
              <p className="text-2xl mt-14 text-white">Venha conhecer a melhor pousada da Região</p>
           </div>
          </div>
          
    </>
  )
}

export default Cabecalho