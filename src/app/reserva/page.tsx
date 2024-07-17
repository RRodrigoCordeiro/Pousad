// app/reserva/reserva.tsx
import React from 'react';
import Rodape from '../components/Rodape';
import Background from '../components/Background';
import Link from "next/link";
import Image from "next/image";



export default function Reserva() {


  return (
    <>
      <div className='container mx-auto flex justify-between items-center mt-3 sm:container sm:flex flex-col  md:flex md:flex-row'>
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
          <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
        </div>
        <Link href="/"><Image className="w-[50px] h-[50px] mr-4 hover: cursor-pointer" src="/seta" alt="Pousada Logo" width={100} height={80} /></Link>
      </div>

      <Background />

      <fieldset className="border border-blue-500 rounded-lg p-4 mt-10 container mx-auto h-[900px]   ">
        <legend className="font-bold">POUSADA DA <span className="text-blue-500 font-bold">MONTANHA</span></legend>
        <h1 className="text-center mb-10 text-blue-500 font-bold">Faça sua reserva e venha curtir o interior da melhor pousada da região</h1>
        <fieldset className="border border-zinc-400 rounded-lg p-4 mt-10 w-[300px] h-[393px] ">
          <h2 className="text-center text-blue-500 font-bold">Check-in</h2>
          <p className="border border-blue-500"></p>
          <input type="date" className="w-[250px] mt-1 p-2 border border-gray-300 rounded-lg hover:outline-none hover:border-blue-500  ml-3" />
          <h3 className="text-2xl text-center mt-20 text-blue-500 font-bold">Selecionar <br /> datas</h3>
        </fieldset>
      </fieldset>
      <Rodape />
    </>
  );
}
