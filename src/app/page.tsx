import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <main>
      <header className=" text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="" alt="Pousada Logo" width={100} height={20} />
            <h1 className="text-2xl font-bold ml-2 text-blue-500">Pousada da Montanha</h1>
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
          <Image src="/mar.png" alt="Pousada Logo" width={1519} height={600} />
          <h1 className="text-3xl absolute top-44 left-1/2 transform -translate-x-1/2 text-white  font-bold">Pousada da Montanha</h1>
          <p className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white">Venha conhecer a melhor pousada da Região</p>
      </div>
      <div>
        <h2>Nossos Quartos</h2>
     
      </div>
    </main>
  );
}
