"use client"
import React, { useEffect, useState } from 'react';
import CabecalhoPaginacao from '../components/CabecalhoPaginacao'
import Background from '../components/Background'
import Rodape from '../components/Rodape'
import Calendario from '../components/Calendario'
import CepApi from '../components/CepApi';

const page = () => {
    const [adulto, setAdulto] = useState(1)
    const [crianca, setCrianca] = useState(0)
    const [total, setTotal] = useState(0)

    const AdicionarAdulto = () => {
        if(adulto < 2){
            setAdulto(adulto + 1);
        } else{
            console.log("Error: Não é possível ter mais que 4 adultos")
        } 
    }

    const RemoverAdulto = () => {
        if(adulto > 0){
            setAdulto(adulto - 1);
        }
        else {
            console.log("Erro: Não é possível ter menos que 1 adulto")
        }  
    }

    const AdicionarCrianca = () =>{
        if(crianca < 2){
            setCrianca(crianca + 1);   

        } else{
            console.log("Erro: O quarto não suporta mias que 02 crianças")
        }
         
    }
    const RemoverCrianca = () => {
        if(crianca > 0){
            setCrianca(crianca - 1);

        }
    }
    useEffect(() => {
        setTotal(crianca + adulto)
    });
  return (

      

    <>
        <CabecalhoPaginacao/>
        <Background/>

        <fieldset className="border border-blue-500 rounded-lg p-4 mt-10 container mx-auto h-full">
        <legend className="font-bold">POUSADA DA <span className="text-blue-500 font-bold">MONTANHA</span></legend>
        <Calendario/>
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto mt-11 border border-zinc-500 w-[620px] h-11">
          <h3 className="font-bold text-blue-500">Adulto(s)</h3>
          <button onClick={AdicionarAdulto} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
          <p>{adulto}</p>
          <button onClick={RemoverAdulto} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
        </fieldset>
        {
            adulto <=0 && <p className="text-center mt-1 font-bold text-red-500">Atenção: Não é possivel fazer a reserva com menos de 01 (um) adulto </p>
        }
        {
            adulto >= 2 && <p className="text-center mt-1 font-bold text-red-500">Atenção: A capacidade máxima para esse quarto é de até 02 (dois) adultos</p>
        }
         <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[620px] h-11 border border-zinc-500 mt-8">
          <h3 className="font-bold text-blue-500">Criança(s)</h3>
          <button onClick={AdicionarCrianca} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
          <p>{crianca}</p>
          <button onClick={RemoverCrianca} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
        </fieldset>
        {
            crianca >=2 && <p className="text-center mt-1 font-bold text-red-500">Atenção: A capacidade máxima para esse quarto é de até 02(duas) crianças.</p>
        }
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[620px] h-11 border border-zinc-500 mt-8">
          <h3 className="font-bold text-blue-500">Total de hóspedes:</h3>
          <p>{total}</p>
        </fieldset>
        <h3 className='font-bold mt-10 ml-16'>Complete as informações abaixo:</h3>
        <CepApi/>
        <button className="block  mx-auto mt-28 font-bold bg-green-500 p-3 rounded-3xl">Fazer Reserva</button>
        </fieldset>
        





        <Rodape/>
    </>
  )
}

export default page