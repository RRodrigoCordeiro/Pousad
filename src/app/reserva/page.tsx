// app/reserva/reserva.tsx
"use client"
import React, { useState } from 'react';
import Rodape from '../components/Rodape';
import Background from '../components/Background';
import Link from "next/link";
import Image from "next/image";



export default function Reserva() {

  const [adulto, setAdulto] = useState(1);
  const [crianca, setCrianca] = useState(0);
  

  const AdicionarAdulto = () => {
    if(adulto < 7){
      setAdulto(adulto + 1)
    } else {
      console.log("Erro: Não é possível ter mais que 7 adultos");
    }

  };

  const RemoverAdulto = () => {
    if(adulto > 0){
      setAdulto(adulto - 1)
    }else{
      console.log("Erro: Não é possível ter menos que 0 adultos.");

    }
  };

  const AdicionarCrianca = () => {
    if(crianca < 6){
      setCrianca(crianca + 1);
    } else{
      console.log("Erro: Não é possível  ter mais que 6 crianças.");
    }
  };

  const RemoverCrianca = () => {
   if(crianca < 7 && crianca > 0){
    setCrianca(crianca - 1);
   }else {
    console.log("Erro: Não é possível ter menos que 0 criança. ");
   }
  };
 


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
        <div className="flex flex-row justify-center space-x-8">
          <fieldset className="border border-zinc-400 rounded-lg p-4 mt-10 w-[300px] h-[393px] ">
            <h2 className="text-center text-blue-500 font-bold">Check-in</h2>
            <p className="border border-blue-500"></p>
            <input type="date" className="w-[250px] mt-1 p-2 border border-gray-300 rounded-lg hover:outline-none hover:border-blue-500  ml-3" />
            <h3 className="text-2xl text-center mt-20 text-blue-500 font-bold">Selecionar <br /> Datas</h3>
          </fieldset>
          <fieldset className="border border-zinc-400 rounded-lg p-4 mt-10 w-[300px] h-[393px] ">
            <h2 className="text-center text-blue-500 font-bold">Check-out</h2>
            <p className="border border-blue-500"></p>
            <input type="date" className="w-[250px] mt-1 p-2 border border-gray-300 rounded-lg hover:outline-none hover:border-blue-500  ml-3" />
            <h3 className="text-2xl text-center mt-20 text-blue-500 font-bold">Selecionar <br /> Datas</h3>
          </fieldset>
        </div>
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto mt-11 border border-zinc-500 w-[620px] h-11">
          <h3 className="font-bold text-blue-500">Adulto(s)</h3>
          <button onClick={AdicionarAdulto} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
          <p>{adulto}</p>
          <button onClick={RemoverAdulto} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
        </fieldset>
        {
           adulto <= 0 && <p className="text-center mt-1 font-bold text-red-500">Atenção: Não é possível fazer a reserva com 0 ou menos de 0 adulto.Selecione novamente a quantidade de adulto(s)</p>
        }
        {
          adulto >= 7 && <p className="text-center mt-1 font-bold text-red-500">Atenção: 7 adultos é a  capacidade máxima  do quarto</p>
        }
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[620px] h-11 border border-zinc-500 mt-8">
          <h3 className="font-bold text-blue-500">Criança(s)</h3>
          <button onClick={AdicionarCrianca} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
          <p>{crianca}</p> 
          <button onClick={RemoverCrianca} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
        </fieldset>
        {
          crianca >= 6 && <p  className="text-center mt-1 font-bold text-red-500">Atenção: 6 crinças é a capacidade máxima do quarto</p> 
        }
        {
          crianca < 0 && <p>Atenção: Não é possível ter menos que 0 criança</p>
        }
    
      </fieldset>
      <Rodape />
    </>
  );
}
