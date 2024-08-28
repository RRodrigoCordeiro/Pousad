
import React from 'react';
import Link from "next/link";

const Rodape = () => {
    return (
        <>
            <footer className="bg-green-800 h-28 w-full text-1xl mt-10 flex justify-center items-center text-white" id="contato">
                <div className="flex space-x-1 md:space-x-14 ml-3 text-xs md:text-base">
                    <p className="text-white font-bold max-w-44">Entre em contato e faça seu cadastro:</p>
                    <p className="text-white">Endereço: Av.1234, bairro Cabo Branco</p>
                    <p className="text-white">Telefone: (00) 0000-0000</p>
                    <p className="text-white font-bold cursor-pointer hover:text-gray-300"><Link href="/escolherReserva">Clique aqui para fazer a reserva</Link></p>
                </div>
            </footer>
        </>
    )
}

export default Rodape