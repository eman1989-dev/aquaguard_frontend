import Navbar from "./Navbar";
import vaso from "./assets/Glass-of-water.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/registro");
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* 🔹 Sección principal */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-100 to-white px-6 pt-28 md:pt-24">
        {/* Imagen */}
        <img
          src={vaso}
          alt="Vaso de agua"
          className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto rounded-lg mb-6 hover:scale-110 transition-transform duration-300"
        />

        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4 px-2">
          Agua más limpia por una salud mejor
        </h2>

        {/* Descripción */}
        <p className="max-w-md sm:max-w-lg md:max-w-2xl text-gray-600 mb-6 text-base sm:text-lg md:text-xl px-4">
          Un filtro de agua doméstico diseñado especialmente para los hogares costarricenses.
        </p>

        {/* Botón */}
        <button
          onClick={click}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-md transition text-lg sm:text-xl shadow-md"
        >
          Comienza ahora
        </button>
      </section>
    </div>
  );
}

export default Home;
