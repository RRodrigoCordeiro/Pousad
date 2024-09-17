import React from 'react'

const Localizacao = () => {
   
  return (
    <>
      <div className="text-center" id="localizacao">
          <h3 className="mt-20 text-2xl font-bold">Localização</h3>
          <p className="mt-5">A pousada da Montanha está localizada uma posição estrategica para você uma expericia fantastica</p>
      </div>
      <div className="flex flex-col text-center justify-center items-center ml-3 lg:flex-row">
          <div className="mr-10">
            <h3 className="font-bold mt-3">250 metros da praia</h3>
            <p className="mt-5">Próximo a pousada temos, farmácia, restaurante, merdacinho, peixaria e praia</p>
            <p className="mt-5 max-w-[600px] text-justify ml-2 md:ml-0"> Nossa pousada está idealmente localizada a poucos passos do mar, permitindo acesso fácil à praia. Além disso, você encontrará farmácias, supermercados e outros serviços essenciais nas proximidades, garantindo conveniência e praticidade durante sua estadia. A região é bem servida por transporte público, facilitando o deslocamento para explorar atrações locais e pontos turísticos. Desfrute da proximidade com o litoral e a facilidade de ter  que precisa ao alcance.</p>
          </div>
          <div className="mt-8 mr-4 ">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.701857011869!2d-34.8133861!3d-7.134618000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc2d36f9b4649%3A0x77c5c4cd27fc21db!2sCabo%20Branco%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1726539707126!5m2!1spt-BR!2sbr"
              width="339"
              height="300" 
              style={{ border: 0 }}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </>
  )
}

export default Localizacao