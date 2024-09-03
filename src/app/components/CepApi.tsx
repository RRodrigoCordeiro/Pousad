
"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CepApi = () => {
    interface Endereco {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ddd: string;
        ibge: string;
        gia: string;
        siafi: string;
    }

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [error, setError] = useState(null);

    

    const buscarCep = () => {

        const urlBase = `https://viacep.com.br/ws/${cep}/json/`

        axios.get(urlBase)
            .then(response => {
                setEndereco(response.data);
                setError(null)
            })
            .catch(error => {
                console.log("Atenção: Erro ao buscar CEP", error)
                setError("Erro ao buscar CEP");
                setEndereco(null)
            })

    }

   

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setEndereco(CopiaNovoEndereco => {
            if (CopiaNovoEndereco) {
                // { ...novoEndereco } cria uma cópia do estado anterior.
                // [name]: value atualiza ou adiciona a chave especificada com o novo valor
                return { ...CopiaNovoEndereco, [name]: value };
            }
            return null;
        });
    };
    return (
        <>
            <div className='mt-6 mb-12 flex justify-center space-x-3  lg:space-x-9 '>
                <button onClick={buscarCep}>Clicar para buscar CEP:</button>
                <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder='Digite seu CEP'
                    className='border border-zinc-600 w-32 lg:w-[220px] text-center '
                />
            </div>
            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
            <div className='flex flex-col items-center lg:flex-row justify-evenly mt-11'>
                <div className="flex sm:flex-row space-x-7  lg:mt-0 lg:space-x-0 lg:flex-col">
                    <p className="font-bold text-blue-500">Endereço:</p>
                    <span>{endereco?.cep}</span>
                </div>
                <div  className="flex sm:flex-row mt-10 space-x-7  lg:mt-0 lg:space-x-0 lg:flex-col">
                    <p className="font-bold text-blue-500">Logradouro:</p>
                    <span>{endereco?.logradouro} </span>
                </div>
                <div className="flex flex-row space-x-3  mt-10 lg:mt-0 lg:flex-col lg:space-x-0 ">
                    <p className="font-bold text-blue-500">Complemento:</p>
                    <input
                        type="text"
                        name="complemento"
                        value={endereco?.complemento}
                        onChange={handleChange}
                        className='border border-zinc-600'
                    />
                </div>
            </div>
            <div className='flex flex-row justify-evenly mt-11'>
                <div>
                    <p className="font-bold text-blue-500">Bairro:</p>
                    <span>{endereco?.bairro}</span>
                </div>
                <div>
                    <p className="font-bold text-blue-500">Localidade: </p>
                    <span>{endereco?.localidade}</span>
                </div>
                <div>
                    <p className="font-bold text-blue-500">UF: </p>
                    <span>{endereco?.uf}</span>
                </div>
            </div>
            <div className='flex flex-row justify-evenly mt-11'>
                <div>
                    <p className="font-bold text-blue-500">DDD:</p>
                    <input
                        type="text"
                        name="complemento"
                        value={endereco?.ddd}
                        onChange={handleChange}
                        className='border border-zinc-600'
                    />
                </div>
                <div>
                    <p className="font-bold text-blue-500">IBGE:</p>
                    <span>{endereco?.ibge}</span>
                </div>
            </div>
        </>
    )
}

export default CepApi