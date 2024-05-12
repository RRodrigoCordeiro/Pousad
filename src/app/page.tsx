import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Pousada Logo" width={120} height={60} />
            <h1 className="text-2xl font-bold ml-2">Nome da Pousada</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Quartos</a></li>
              <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
              <li><a href="#" className="hover:text-gray-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}
