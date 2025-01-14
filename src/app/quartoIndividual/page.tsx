import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import CabecalhoPaginacao from '../../components/CabecalhoPaginacao';
import Background from '../../components/Background';
import Rodape from '../../components/Rodape';

const Page = () => {
    return (
        <>
            <CabecalhoPaginacao />
            <Background />
            <h1 className="text-center mt-12 text-2xl font-bold">CONHEÇA O QUARTO INDIVIDUAL</h1>
            <Image
                src="/image/QuartoIndividual.jpg"
                alt="Quarto Individual"
                width={800} //opacid 
                height={80}
                className="m-auto w-[700px] h-[380px] mt-20 "
            />
            <div className='leading-10'>
                <h2 className='font-bold text-center mt-8 mb-7'>O Quarto Individual é ideal para você!</h2>
                <ul className='text-center list-disc list-inside'>
                    <li><span className="font-bold text-blue-500">Variedade de Oferta:</span>Disponibilidade de quartos individuais com diferentes configurações e vistas</li>
                    <li><span className="font-bold text-blue-500">Flexibilidade: </span>Opções de configuração de camas para atender às necessidades do grupo</li>
                    <li><span className="font-bold text-blue-500">Quarto climatizado: </span>ambiente interno em uma temperatura confortável e agradável</li>
                    <li><span className="font-bold text-blue-500">Ambiente Familiar:</span>Perfeito para criar uma atmosfera familiar entre os viajantes</li>
                    <li><span className="font-bold text-blue-500">Conforto: </span>Camas e comodidades adequadas para todos os hóspedes</li>
                    <li><span className="font-bold text-blue-500">Acessibilidade: </span>Acesso fácil a áreas comuns e serviços da pousada</li>
                    <li><span className="font-bold text-blue-500">Ambiente Acolhedor: </span>Ambiente ideal para para grupos pequenos</li>
                    <li><span className="font-bold text-blue-500">Vistas Panorâmicas: </span>Quartos com vistas para o jardim e piscina</li>
                    <li><span className="font-bold text-blue-500">Capacidade Máxima: </span>Espaço privativo para até 4 pessoas</li>
                </ul>
            </div>
            <Link href="/reservaIndividual">
                <button className="font-bold bg-green-500 block mx-auto mt-12 rounded-3xl p-3">Fazer a reserva para o quarto Individual</button>
            </Link>
            {/* <img src="/QuartoIndividual.jpg" className='w-96 h-96 mx-auto'/> */}
            <Rodape />
        </>
    );
};

export default Page;
