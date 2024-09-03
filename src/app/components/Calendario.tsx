import React from 'react'

const Calendario = () => {
  return (
    <>
        <div className="flex flex-col sm:space-x-0  items-center lg:flex-row justify-center lg:space-x-8">
          <fieldset className="border border-zinc-400 rounded-lg p-4 mt-10 w-[300px] h-[400px] ">
            <h2 className="text-center text-blue-500 font-bold">Check-in</h2>
            <p className="border border-blue-500"></p>
            <input type="date" className="w-[250px] mt-1 p-2 border border-gray-300 rounded-lg hover:outline-none hover:border-blue-500  ml-3" />
            <h3 className="text-2xl text-center mt-20 text-blue-500 font-bold">Selecionar <br /> Datas</h3>
          </fieldset>
          <fieldset className="border border-zinc-400 rounded-lg p-4 mt-10 w-[300px] h-[400px] ">
            <h2 className="text-center text-blue-500 font-bold">Check-out</h2>
            <p className="border border-blue-500"></p>
            <input type="date" className="w-[250px] mt-1 p-2 border border-gray-300 rounded-lg hover:outline-none hover:border-blue-500  ml-3" />
            <h3 className="text-2xl text-center mt-20 text-blue-500 font-bold">Selecionar <br /> Datas</h3>
          </fieldset>
        </div>
    </>
  )
}

export default Calendario