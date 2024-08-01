import Image from "next/image";
import React from 'react';
import Link from "next/link";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Localizacao from "./components/Localizacao";
import Background from "./components/Background";

export default function Home() {
  return (
    <main>
      <Cabecalho />
      <Background />
      <div className="text-3xl font-bold text-center mt-24 text-black-400" id="quartos">
        <h2>SEJA BEM-VINDO(A)!</h2>
      </div>
      <div className="text-center mt-18 text-black-400 text-1xl ">
        <p className="mt-5">Relaxe em nossas acomodações e curta o melhor da nossa capital</p>
        <p className="mt-5">O Pousada da Montanha recebe pessoas de todo o mundo</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold ">
        <h3>Conheça nossos Quartos</h3>
      </div>
      <div className="flex justify-center m-4 mt-7">
        <Link href="/quartoIndividual">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300 " src="/QuartoIndividual.jpg" alt="Pousada Logo" width={200} height={80} />
        </Link>
        <Link href="/quartoCasal">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300 " src="/QuartoCasal.jpg" alt="Pousada Logo" width={200} height={80} />
        </Link>
        <Link href="/quartoTematico">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300" src="/QuartoTematico.jpg" alt="Pousada Logo" width={200} height={80} />
        </Link>
      </div>
      <div className="flex space-x-44 justify-center  ">
        <p className="text-green-900 flex items-center">Quarto Individual</p>
        <p className="text-green-900">Quarto de Casal</p>
        <p className="text-green-900">Quarto Temático</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold" id="sobre">
        <h3>Vantagens da Pousada</h3>
      </div>
      <div className="text-center mt-5 text-1xl" >
        <p>Conheça sobre mais sobre a melhor pousada da região</p>
      </div>
      <div className="flex justify-center space-x-6 mt-12">
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2">Garagem</h3>
            <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste debitis ab praesentium rem omnis aspernatur</p>
          </div>
        </div>
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2 ">Café da manhã</h3>
            <p className="w-[320px] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem nam natus reiciendis facere praesentium mollitia .</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-12">
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2">Espaço para Pets</h3>
            <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
          </div>
        </div>
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2">250 Metros perto da praia</h3>
            <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-12">
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2">Piscina</h3>
            <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
          </div>
        </div>
        <Image className="w-[100px] h-[100px] hover:scale-110 duration-300" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
        <div className="flex justify-center">
          <div>
            <h3 className="text-left font-bold mb-2">Conforto</h3>
            <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
          </div>
        </div>
      </div>
      <Localizacao />
      <Rodape />

    </main>
  );
}
