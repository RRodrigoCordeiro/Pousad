import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <main>
      <header className=" text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="" alt="Pousada Logo" width={100} height={20} />
            <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
            <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
          </div>
          <nav>
            <ul className="flex space-x-4 mr-5">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Quartos</a></li>
              <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
              <li><a href="#" className="hover:text-gray-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="relative">
          <Image className="w-[50] h-[625px]" src="/mar.png" alt="Pousada Logo" width={1519} height={800} />
          <h1 className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white  font-bold">Pousada da Montanha</h1>
          <p className="text-2xl absolute top-1/2 mt-14 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white">Venha conhecer a melhor pousada da Região</p>
      </div>
      <div className="text-3xl font-bold text-center mt-24 text-black-400">
        <h2>SEJA BEM-VINDO(A)!</h2>
      </div>
      <div className="text-center mt-18 text-black-400 text-1xl ">
          <p className="mt-5">Relaxe em nossas acomodações e curta o melhor da nossa capital</p>
          <p className="mt-5">Temos diversos quartos com o máximo de conforto</p>
      </div>
      <div>
        <h2>Conheça nossos quartos</h2>
      </div>
    </main>
  );
}
