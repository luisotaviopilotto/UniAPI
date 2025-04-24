// components/Donate.tsx
import React from 'react';

interface DonateProps {
  amount?: number; // Valor sugerido para doação
}



const Donate: React.FC<DonateProps> = ({ amount = 5 }) => {
  // Função para redirecionar para o link de doação
  const handleDonate = () => {
    
    window.open(donationUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        Apoie o UniAPI
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Sua doação ajuda a manter este projeto open source ativo e acessível para todos.
      </p>
      <button
        onClick={handleDonate}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Doar ${amount}
      </button>
      <div className="flex space-x-4">
        <button
          onClick={() => handleDonate()}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
        >
          $5
        </button>
        <button
          onClick={() => handleDonate()}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
        >
          $10
        </button>
        <button
          onClick={() => handleDonate()}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
        >
          $20
        </button>
      </div>
    </div>
  );
};

export default Donate;