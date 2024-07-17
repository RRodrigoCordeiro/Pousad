import React from 'react'


const Cabecalho = () => {
  return (
    <>
      <header className=" text-black py-4  ">
        <div className="container mx-auto flex justify-between items-center  sm:container sm:flex flex-col  md:flex md:flex-row ">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold ml-2 text-black-500">Pousada</h1>
            <p className="text-2xl font-bold ml-2 text-blue-500">da Montanha</p>
          </div>
          <nav>
            <ul className="flex space-x-3" >
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#quartos" className="hover:text-gray-300">Quartos</a></li>
              <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>
              <li><a href="#localizacao" className="hover:text-gray-300">Localização</a></li>
              <li><a href="#contato" className="hover:text-gray-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Cabecalho