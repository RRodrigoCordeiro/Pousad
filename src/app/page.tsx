import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <main>
      <header className=" text-black py-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-28">
            <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
            <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
          </div>
          <nav>
            <ul className="flex space-x-4 mr-5" >
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
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-green-950 bg-opacity-50 p-10 text-center">
          <h1 className="text-3xl text-white font-bold">Pousada da Montanha</h1>
          <p className="text-2xl mt-14 text-white">Venha conhecer a melhor pousada da Região</p>
       </div>
      </div> 
      <div className="text-3xl font-bold text-center mt-24 text-black-400">
        <h2>SEJA BEM-VINDO(A)!</h2>
      </div>
      <div className="text-center mt-18 text-black-400 text-1xl ">
          <p className="mt-5">Relaxe em nossas acomodações e curta o melhor da nossa capital</p>
          <p className="mt-5">O Pousada da Montanha recebe pessoas de todo o mundo</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold">
        <h3>Conheça nossos Quartos</h3>
      </div>
      <div className="flex justify-center m-4 mt-7">
        <Image className="w-[280px] h-[190px] mr-4 hover: cursor-pointer" src="/QuartoIndividual.jpg" alt="Pousada Logo" width={200} height={80} />
        <Image className="w-[280px] h-[190px] mr-4  hover: cursor-pointer" src="/QuartoCasal.jpg" alt="Pousada Logo" width={200} height={80} />
        <Image className="w-[280px] h-[190px]  hover: cursor-pointer" src="/QuartoTematico.jpg" alt="Pousada Logo" width={200} height={80} />
      </div>
      <div className="flex  space-x-44  justify-center  ">
        <p className="text-green-900 flex items-center">Quarto Individual</p>
        <p className="text-green-900">Quarto de Casal</p>
        <p className="text-green-900">Quarto Temático</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold">
        <h3>Vantagens da Pousada</h3>
      </div>
      <div className="text-center mt-5 text-1xl">
        <p>Conheça sobre mais sobre a melhor pousada da região</p>
      </div>
      <div className="flex justify-center space-x-6 mt-12">
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">A pousada</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste debitis ab praesentium rem omnis aspernatur</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">A pousada</h3>
              <p className="w-[320px] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem nam natus reiciendis facere praesentium mollitia .</p>
            </div>
          </div>  
      </div>
      <div className="flex justify-center space-x-6 mt-12">
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">A pousada</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">A pousada</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div>
      </div>
      
    </main>
  );
}
