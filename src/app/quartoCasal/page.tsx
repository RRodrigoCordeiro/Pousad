import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import CabecalhoPaginacao from '../components/CabecalhoPaginacao';
import Background from '../components/Background';
import Rodape from '../components/Rodape';

const page = () => {
    return (
        <>
            <CabecalhoPaginacao/>
            <Background/>
            <h1 className="font-bold text-center mt-12 text-2xl">CONHEÇA O QUARTO DE CASAL</h1>
            <Image
                src="/QuartoCasal.jpg"
                alt="Quarto Casal"
                width={800} //opacid 
                height={80}
                className="m-auto w-[700px] h-[380px] mt-20 "
            />
            <div className="leading-10">
                <h2 className='font-bold text-center mt-8 mb-7'>O quarto de casal é ideal para você!</h2>
                <ul className='text-center list-disc list-inside'>
                    <li><span className="font-bold text-blue-500">Ar-condicionado:</span>Controle de temperatura para um ambiente perfeito</li>
                    <li><span className="font-bold text-blue-500">Banheiro de Hidromassagem: </span>Perfeito para relaxar e descontrair</li>
                    <li><span className="font-bold text-blue-500">TV de tela Plana:</span>Com diversos canais para seu entretenimento</li>
                    <li><span className="font-bold text-blue-500">Capacidade Máxima:</span>Espaço privativo para até 8 pessoas</li>
                    <li><span className="font-bold text-blue-500">WI-FI gratuito:</span>Conexão rápida para navegar e se divertir</li>
                    <li><span className="font-bold text-blue-500">Cofre de Segurança:</span>Proteção extra ara seus pertences</li>
                    <li><span className="font-bold text-blue-500">Vista Panorâmica:</span>Janelas com vistas espetaculares</li>
                    <li><span className="font-bold text-blue-500">Cama King Size: </span>Espaço idela para maior conforto</li>
                    <li><span className="font-bold text-blue-500">Frigobar:</span>Bebidas e disponíveis dentro do quarto</li>                   
                    <li><span className="font-bold text-blue-500">Limpeza Diária: </span>Quartos simpecáveis</li>
                </ul>
            </div>
            <Link href="/reserva">
                <button className="font-bold bg-green-500 block mx-auto mt-12 rounded-3xl p-3">Fazer reserva para o quarto de casal</button>
            </Link>
            <Rodape/>
        </>
    )
}

export default page