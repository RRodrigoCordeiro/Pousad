"use client"
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import CabecalhoPaginacao from '../../components/CabecalhoPaginacao'
import Background from '../../components/Background'
import Rodape from '../../components/Rodape'
import Calendario from '../../components/Calendario'
import CepApi from '../../components/CepApi';
import Modal from 'react-modal'
import Toastify from 'toastify-js'
import Link from 'next/link';

const Page = () => {
    const [adulto, setAdulto] = useState(1)
    const [crianca, setCrianca] = useState(0)
    const [total, setTotal] = useState(0)
    const [modalAberto, setModalAberto] = useState(false)

    const AdicionarAdulto = () => {
        if (adulto < 2) {
            setAdulto(adulto + 1);
        } else {
            console.log("Error: Não é possível ter mais que 4 adultos")
        }
    }

    const RemoverAdulto = () => {
        if (adulto > 0) {
            setAdulto(adulto - 1);
        }
        else {
            console.log("Erro: Não é possível ter menos que 1 adulto")
        }
    }

    const AdicionarCrianca = () => {
        if (crianca < 2) {
            setCrianca(crianca + 1);

        } else {
            console.log("Erro: O quarto não suporta mias que 02 crianças")
        }

    }
    const RemoverCrianca = () => {
        if (crianca > 0) {
            setCrianca(crianca - 1);

        }
    }
    useEffect(() => {
        setTotal(crianca + adulto)
    },[crianca, adulto]);

    const fecharModal = () => {
        setModalAberto(false)
        Toastify({
            text: "RESERVA REALIZADA COM SUCESSO!",
            duration: 4000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            className: " ml-8 mt-8 w-[350px] p-2",
            style: {
                background: "#00b09b",
            }
        }).showToast();
    }

    return (
        <>
            <CabecalhoPaginacao />
            <Background />
            <fieldset className="border border-blue-500 rounded-lg p-4 mt-10 container md:w-[750px] lg:w-[1000px] w-auto mx-auto h-full">
                <legend className="font-bold">POUSADA DA <span className="text-blue-500 font-bold">MONTANHA</span></legend>
                <h1 className="text-center mb-10 text-blue-500 font-bold">Faça sua reserva e venha curtir o interior da melhor pousada da região</h1>
                <h2 className='text-red-600 font-bold text-center mb-8'>Regras da pousada para este quarto:</h2>
                <ul className='list-decimal ml-3 '>
                    <li className="mb-3">O quarto acomoda até 2 adultos e 2 crianças, sendo impossível acomodar mais de 2 adultos devido ao espaço disponível.</li>
                    <li className="mb-3">A capacidade máxima do quarto é de 4 pessoas.</li>
                    <li className="mb-3">Mesmo sem a presença de crianças, o quarto não comporta mais de 2 adultos por conta das limitações de espaço.</li>
                    <li className="mb-3">A reserva deve incluir, no mínimo, um adulto.</li>
                </ul>
                <Calendario />
                <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto mt-11 border border-zinc-500 w-[300px] lg:w-[620px] h-11">
                    <h3 className="font-bold text-blue-500">Adulto(s)</h3>
                    <button onClick={AdicionarAdulto} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
                    <p>{adulto}</p>
                    <button onClick={RemoverAdulto} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
                </fieldset>
                {
                    adulto <= 0 && <p className="text-center mt-1 font-bold text-red-500">Atenção: Não é possivel fazer a reserva com menos de 01 (um) adulto </p>
                }
                {
                    adulto >= 2 && <p className="text-center mt-1 font-bold text-red-500">Atenção: A capacidade máxima para esse quarto é de até 02 (dois) adultos</p>
                }
                <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[300px] lg:w-[620px] h-11 border border-zinc-500 mt-8">
                    <h3 className="font-bold text-blue-500">Criança(s)</h3>
                    <button onClick={AdicionarCrianca} className="border border-zinc-950 rounded-full h-7 w-7 mt-1 flex items-center justify-center">+</button>
                    <p>{crianca}</p>
                    <button onClick={RemoverCrianca} className="border border-zinc-950 rounded-full  h-7 w-7 mt-1 flex items-center justify-center">-</button>
                </fieldset>
                {
                    crianca >= 2 && <p className="text-center mt-1 font-bold text-red-500">Atenção: A capacidade máxima para esse quarto é de até 02(duas) crianças.</p>
                }
                <fieldset className="flex flex-row items-center justify-evenly space-x-8 m-auto w-[300px] lg:w-[620px] h-11 border border-zinc-500 mt-8">
                    <h3 className="font-bold text-blue-500">Total de hóspedes:</h3>
                    <p>{total}</p>
                </fieldset>
                <h3 className='font-bold mt-10 ml-16'>Complete as informações abaixo:</h3>
                <CepApi />
                <Modal
                    isOpen={modalAberto}
                    onRequestClose={fecharModal}
                    shouldCloseOnOverlayClick={false}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg shadow-lg text-center z-[1050]"
                >
                    <div className="flex items-center flex-col">
                        <FaCheck className='bg-green-600 rounded-full w-24 h-24 p-3 mb-3' />
                        <h1 className=" text-base lg:text-2xl">Parabéns pela reserva na <span className="font-bold text-base lg:text-2xl">Pousada</span> <span className="text-base lg:text-2xl text-blue-500">da Montanha</span>.</h1>
                        <p className="mt-3 text-base lg:text-2xl">Reserva realizada com seucesso!</p>
                        <p className="text-base lg:text-2xl mt-3">Estamos te esperando!</p>
                        <Link href="/" className="mt-3 font-bold text-green-600 text-lg" onClick={fecharModal}>
                            Fechar
                        </Link>
                    </div>
                </Modal>
                <button className="block  mx-auto mt-28 font-bold bg-green-500 p-3 rounded-3xl" onClick={() => setModalAberto(true)}>Fazer Reserva</button>
            </fieldset>
            <Rodape />
        </>
    )
}
export default Page