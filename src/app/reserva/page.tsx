// app/reserva/reserva.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Rodape from '../components/Rodape';
import Background from '../components/Background';
import CabecalhoPaginacao from '../components/CabecalhoPaginacao';
import axios from 'axios';
import Calendario from '../components/Calendario';
import CepApi from '../components/CepApi';
import Modal from 'react-modal'
import { FaCheck } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import Link from 'next/link';


export default function Reserva() {

  const [adulto, setAdulto] = useState(1);
  const [crianca, setCrianca] = useState(0);
  const [total, setTotal] = useState(0);
  const [modalAberto, setModalAberto] = useState(false)
 
 

  const AdicionarAdulto = () => {
    if (adulto < 4) {
      setAdulto(adulto + 1)
    } else {
      console.log("Erro: Não é possível ter mais que 4 adultos");
    }

  };

  const RemoverAdulto = () => {
    if (adulto > 0) {
      setAdulto(adulto - 1)
    } else {
      console.log("Erro: Não é possível ter menos que 0 adultos.");

    }
  };

  const AdicionarCrianca = () => {
    if (crianca < 4) {
      setCrianca(crianca + 1);
    } else {
      console.log("Erro: Não é possível  ter mais que 4 crianças.");
    }
  };

  const RemoverCrianca = () => {
    if (crianca <= 4 && crianca > 0) {
      setCrianca(crianca - 1);
    } else {
      console.log("Erro: Não é possível ter menos que 0 criança. ");
    }
  };
  useEffect(() => {
    setTotal(adulto + crianca);
  }, [adulto, crianca]);

  const fecharModal = () => {
    setModalAberto(false)

  }
  
  


  return (
    <>
      <CabecalhoPaginacao/>
      <Background />
      <fieldset className="border border-blue-500 rounded-lg p-4 mt-10 container mx-auto h-full   ">
        <legend className="font-bold">POUSADA DA <span className="text-blue-500 font-bold">MONTANHA</span></legend>
        <h1 className="text-center mb-10 text-blue-500 font-bold">Faça sua reserva e venha curtir o interior da melhor pousada da região</h1>
        <Calendario/>
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
          adulto >= 4 && <p className="text-center mt-1 font-bold text-red-500">Atenção: 4 adultos é a  capacidade máxima  do quarto</p>
        }
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[620px] h-11 border border-zinc-500 mt-8">
          <h3 className="font-bold text-blue-500">Criança(s)</h3>
          <button onClick={AdicionarCrianca} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
          <p>{crianca}</p>
          <button onClick={RemoverCrianca} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
        </fieldset>
        {
          crianca >= 4 && <p className="text-center mt-1 font-bold text-red-500">Atenção: 4 crinças é a capacidade máxima do quarto</p>
        }
        {
          crianca < 0 && <p>Atenção: Não é possível ter menos que 0 criança</p>
        }
        <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[620px] h-11 border border-zinc-500 mt-8">
          <h3 className="font-bold text-blue-500">Total de hóspedes:</h3>
          <p>{total}</p>
        </fieldset>
        <h3 className='font-bold mt-10 ml-16'>Complete as informações abaixo:</h3>
        <CepApi/>
        <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        shouldCloseOnOverlayClick={false}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg text-center z-[1050]"
        >
          <div className="flex items-center flex-col">
            <FaCheck className='bg-green-600 rounded-full w-24 h-24 p-3 mb-3'/>
            <h1 className="text-2xl">Parabéns pela reserva na <span className="font-bold text-2xl">Pousada</span> <span className="text-2xl text-blue-500">da Montanha</span>.</h1>
            <p className="mt-3 text-2xl">Reserva realizada com seucesso!</p> 
            <p className="text-2xl mt-3">Estamos te esperando!</p>

            <div className="flex flex-row space-x-28 mt-3">
              <Link href="/">
                  Página Inicial 
              </Link>
              <button onClick={fecharModal}>Fechar</button>
            </div>

          </div>

        </Modal>
      
        <button className="block  mx-auto mt-28 font-bold bg-green-500 p-3 rounded-3xl" onClick={() => setModalAberto(true)} >Fazer Reserva</button>
      </fieldset>
      <Rodape />
    </>
  );
}
