// app/reserva/reserva.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Rodape from '../components/Rodape';
import Background from '../components/Background';
import CabecalhoPaginacao from '../components/CabecalhoPaginacao';
import axios from 'axios';


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

export default function Reserva() {

  const [adulto, setAdulto] = useState(1);
  const [crianca, setCrianca] = useState(0);
  const [total, setTotal] = useState(0);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [error, setError] = useState(null);

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
      <CabecalhoPaginacao/>
      <Background />

      <fieldset className="border border-blue-500 rounded-lg p-4 mt-10 container mx-auto h-full   ">
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
        <div className='mt-6 mb-12 flex justify-center space-x-9'>
          <button onClick={buscarCep}>Clicar para buscar CEP:</button>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder='Digite seu CEP'
            className='border border-zinc-600 '
          />
        </div>
        {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
        <div className='flex flex-row justify-evenly mt-11'>
          <div>
            <p className="font-bold text-blue-500">Endereço:</p>
            <span>{endereco?.cep}</span>
          </div>
          <div>
            <p className="font-bold text-blue-500">Logradouro:</p>
            <span>{endereco?.logradouro} </span>
          </div>
          <div>
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
            <span>{endereco?.ddd}</span>
          </div>
          <div>
            <p className="font-bold text-blue-500">IBGE:</p>
            <span>{endereco?.ibge}</span>
          </div>
          <div>
            <p>GIA:</p>
            <span> {endereco?.gia}</span>
          </div>
        </div>
        <button className="block  mx-auto mt-28 font-bold bg-green-500 p-3 rounded-3xl">Fazer Reserva</button>
      </fieldset>
      <Rodape />
    </>
  );
}
