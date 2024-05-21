import Image from "next/image";
import React from 'react';



export default function Home() {
  return (
    <main>
      <header className=" text-black py-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-28">
            <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
            <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
          </div>
          <nav>
            <ul className="flex space-x-4 mr-5" >
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Quartos</a></li>
              <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
              <li><a href="#" className="hover:text-gray-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="relative">
        <Image className="w-[50] h-[625px]" src="/mar.png" alt="Pousada Logo" width={1519} height={800} />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-green-950 bg-opacity-50 p-10 text-center">
          <h1 className="text-3xl text-white font-bold">Pousada da Montanha</h1>
          <p className="text-2xl mt-14 text-white">Venha conhecer a melhor pousada da Região</p>
       </div>
      </div> 
      <div className="text-3xl font-bold text-center mt-24 text-black-400">
        <h2>SEJA BEM-VINDO(A)!</h2>
      </div>
      <div className="text-center mt-18 text-black-400 text-1xl ">
          <p className="mt-5">Relaxe em nossas acomodações e curta o melhor da nossa capital</p>
          <p className="mt-5">O Pousada da Montanha recebe pessoas de todo o mundo</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold">
        <h3>Conheça nossos Quartos</h3>
      </div>
      <div className="flex justify-center m-4 mt-7">
        <Image className="w-[280px] h-[190px] mr-4 hover: cursor-pointer" src="/QuartoIndividual.jpg" alt="Pousada Logo" width={200} height={80} />
        <Image className="w-[280px] h-[190px] mr-4  hover: cursor-pointer" src="/QuartoCasal.jpg" alt="Pousada Logo" width={200} height={80} />
        <Image className="w-[280px] h-[190px]  hover: cursor-pointer" src="/QuartoTematico.jpg" alt="Pousada Logo" width={200} height={80} />
      </div>
      <div className="flex  space-x-44  justify-center  ">
        <p className="text-green-900 flex items-center">Quarto Individual</p>
        <p className="text-green-900">Quarto de Casal</p>
        <p className="text-green-900">Quarto Temático</p>
      </div>
      <div className="text-center mt-20 text-2xl font-bold">
        <h3>Vantagens da Pousada</h3>
      </div>
      <div className="text-center mt-5 text-1xl">
        <p>Conheça sobre mais sobre a melhor pousada da região</p>
      </div>
      <div className="flex justify-center space-x-6 mt-12">
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Garagem</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste debitis ab praesentium rem omnis aspernatur</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2 ">Café da manhã</h3>
              <p className="w-[320px] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem nam natus reiciendis facere praesentium mollitia .</p>
            </div>
          </div>  
      </div>
      <div className="flex justify-center space-x-6 mt-12">
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Espaço para Pets</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">250 Metros perto da praia</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div> 
      </div>
      <div className="flex justify-center space-x-6 mt-12">
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Piscina</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div>
          <Image className="w-[100px] h-[100px]" src="/QuartoCasal.jpg" alt="quarto teste" width={200} height={10}/>
          <div className="flex justify-center">
            <div>
              <h3 className="text-left font-bold mb-2">Conforto</h3>
              <p className="w-[320px]  text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quod cupiditate inventore. Quod consequuntur</p>
            </div>
          </div> 
      </div>
      <div className="text-center">
          <h3 className="mt-20 text-2xl font-bold">Localização</h3>
          <p className="mt-5">A pousada da Montanha está localizada uma posição estrategica para você uma expericia fantastica</p>
      </div>
      <div className="flex mt-20 justify-center items-center ">
          <div className="mr-10">
            <h3 className="font-bold ">250 metros da praia</h3>
            <p className="mt-5">Próximo a pousada temos, farmácia, restaurante, merdacinho, peixaria e praia</p>
            <p className="mt-5 max-w-[600px] text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repudiandae alias aliquid distinctio labore voluptatum et. Nihil ullam dolores quam illo, esse cupiditate unde, fugit, molestias natus inventore sequi harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa vel tenetur facilis nobis quod mollitia sed ratione asperiores possimus eligendi, repellat voluptatibus autem repudiandae hic itaque, fuga, at architecto.</p>
          </div>
          <div>
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15836.331905075587!2d-34.8798557!3d-7.1163828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace79b0f0c9237%3A0x7c16d2f285ceb3d3!2sShopping%20Tambi%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1716315952309!5m2!1spt-BR!2sbr"
                width="500"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
      <footer className="bg-green-800 h-28 mt-20 flex justify-center items-center text-white">
        <div className="flex space-x-20">
          <p className="text-white font-bold max-w-44">Entre em contato e faça seu cadastro:</p>
          <p className="text-white">Endereço: Av.1234</p>
          <p className="text-white">Telefone: (00) 0000-0000</p>
          <p className="text-white font-bold cursor-pointer hover:text-blue-500">Clique aqui para fazer a reserva</p>
        </div>
       
      </footer>

    </main>
  );
}
