import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ButtonLogout from "@/components/dashboard/ButtonLogout";
import { FaHardHat } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <FaHardHat className="w-24 h-24 text-yellow-500 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-800">
            Página em Construção
          </h1>
          <p className="text-xl text-gray-600">Olá, {session.user?.name}! 👋</p>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <p className="text-gray-700">
              Estamos trabalhando duro para trazer novidades incríveis para
              você. Nossa equipe está desenvolvendo funcionalidades que irão
              transformar sua experiência!
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FiClock className="w-5 h-5" />
            <p>Previsão de conclusão: Em breve</p>
          </div>
          <div className="mt-8">
            <ButtonLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
