import Image from "next/image";
import React from 'react';
import Link from "next/link";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Localizacao from "./components/Localizacao";
import Background from "./components/Background";
import Carrossel from "./components/Carrossel";

export default function Home() {
  return (
    <>
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
      <div className="flex flex-col justify-center items-center space-y-12 lg:flex-row lg:justify-center m-4 lg:space-y-0   ">
        <Link href="/quartoIndividual">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300 " src="/QuartoIndividual.jpg" alt="Pousada Logo" width={200} height={80} />
          <p className="text-center text-green-900 mt-3 mb-3">Quarto Individual</p>
        </Link>
        <Link href="/quartoCasal">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300 " src="/QuartoCasal.jpg" alt="Pousada Logo" width={200} height={80} />
          <p className="text-center text-green-900 mt-3 mb-3">Quarto de Casal</p>
        </Link>
        <Link href="/quartoTematico">
          <Image className="w-[280px] h-[190px] mr-7 hover:scale-110 duration-300" src="/QuartoTematico.jpg" alt="Pousada Logo" width={200} height={80} />
          <p className="text-center text-green-900 mt-3 mb-3">Quarto Temático</p>
        </Link>
      </div>
      <div className="text-center mt-14  text-2xl font-bold" id="sobre">
        <h3>Confira o feedback dos nossos hóspedes</h3>
      </div>
      <div className="text-center mt-5 text-1xl" >
        <p>Veja o melhor feedback da cidade!</p>
      </div>
      <Carrossel/>
      <div className="text-center  text-2xl font-bold" id="sobre">
        <h3>Vantagens da Pousada</h3>
      </div>
      <div className="text-center mt-5 text-1xl" >
        <p>Conheça sobre mais sobre a melhor pousada da região</p>
      </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0 " src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Garagem</h3>
              <p className="w-[320px]  text-left"> Temos uma garagem espaçosa e de fácil acesso, garantindo segurança e conforto para o seu veículo durante toda a estadia.</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0" src="/QuartoCasal.jpg" alt="" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2 ">Café da manhã</h3>
              <p className="w-[320px] text-left">O café da manhã é variado, com ingredientes frescos, incluindo frutas, pães artesanais, sucos e cafés especiais.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Espaço para Pets</h3>
              <p className="w-[320px]  text-left"> A pousada tem um espaço dedicado para pets, onde seu animal de estimação pode brincar em segurança.</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">250 Metros perto da praia</h3>
              <p className="w-[320px]  text-left">Estamos localizados a apenas 250 metros da praia, oferecendo fácil acesso à areia e ao mar.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Piscina</h3>
              <p className="w-[320px]  text-left">Piscinas refrescante, ideal para um mergulho ou para se bronzear ao sol. Um espaço perfeito para momentos de lazer.</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px] hover:scale-110 duration-300 m-auto lg:m-0" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10} />
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Conforto</h3>
              <p className="w-[320px]  text-left"> Experimente o máximo em conforto com nossas acomodações bem equipadas, que garantem uma estadia agradável.</p>
            </div>
          </div>
        </div>
      <Localizacao />
      <Rodape />
    </>
  );
}
