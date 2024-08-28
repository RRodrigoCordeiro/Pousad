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
            <h3 className="font-bold ">250 metros da praia</h3>
            <p className="mt-5">Próximo a pousada temos, farmácia, restaurante, merdacinho, peixaria e praia</p>
            <p className="mt-5 max-w-[600px] text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repudiandae alias aliquid distinctio labore voluptatum et. Nihil ullam dolores quam illo, esse cupiditate unde, fugit, molestias natus inventore sequi harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa vel tenetur facilis nobis quod mollitia sed ratione asperiores possimus eligendi, repellat voluptatibus autem repudiandae hic itaque, fuga, at architecto.</p>
          </div>
          <div className="mt-8 mr-4 ">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15836.331905075587!2d-34.8798557!3d-7.1163828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace79b0f0c9237%3A0x7c16d2f285ceb3d3!2sShopping%20Tambi%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1716315952309!5m2!1spt-BR!2sbr"
                width="365"
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