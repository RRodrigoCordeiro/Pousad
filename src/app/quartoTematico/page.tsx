import React from 'react'
import CabecalhoPaginacao from '../components/CabecalhoPaginacao'
import Background from '../components/Background'
import Rodape from '../components/Rodape'
import Image from "next/image";
import Link from 'next/link';

const page = () => {
  return (
    <>
        <CabecalhoPaginacao/>
        <Background/>
        <h1 className="text-center mt-12 text-2xl font-bold">Conheça o quarto ideal para você!</h1>
        <Image
            src="/QuartoTematico.jpg"
            alt="Quarto Individual"
            width={800} //opacid 
            height={80}
            className="m-auto w-[700px] h-[380px] mt-20 "
        /> 
        <div className='leading-10'>
            <h2 className='font-bold text-center mt-8 mb-7'>O Quarto Individual é ideal para você!</h2>
            <ul className='text-center list-disc list-inside'>
                <li><span className="font-bold text-blue-500">Camas Confortáveis:</span>Diversas opções de cama para todos os hóspedes</li>
                <li><span className="font-bold text-blue-500">Atividades Temáticas:</span>Ofertas especiais conforme o tema do quarto</li>
                <li><span className="font-bold text-blue-500">Decoração temática:</span>Detalhes que tornam a estadia inesquecível</li>
                <li><span className="font-bold text-blue-500">Decoração Exclusiva:</span>Ambientes únicos com temas variados</li>
                <li><span className="font-bold text-blue-500">Capacidade Máxima:</span>Espaço privativo para até 8 pessoas</li>
                <li><span className="font-bold text-blue-500">Sala de estar:</span>Espaço extra para convívio e relaxamneto</li>
                <li><span className="font-bold text-blue-500">Espaço Amplo:</span>Perfeito para famílias e grupos grandes</li>
                <li><span className="font-bold text-blue-500">TV de Tela Plana:</span>Diversos canais para entretenimento</li>
                <li><span className="font-bold text-blue-500">Mesa de Jantar:</span>Espaço para refeiçõoes em grupo.</li>
                <li><span className="font-bold text-blue-500">Ar-condicionado:</span>Controle de temperatura ideal</li>
                <li><span className="font-bold text-blue-500">Wi-fi gratuito:</span>Conexão estável para todos</li>  
            </ul>
        </div>
        <Link href="/reserva">
            <button className="font-bold bg-green-500 block mx-auto mt-12 rounded-3xl p-3">Fazer a reserva para o quarto Individual</button>
        </Link>
        <Rodape/>
    </>
  )
}
export default page