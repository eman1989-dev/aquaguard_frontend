import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos del menú
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Botón para abrir/cerrar el sidebar (solo en móviles) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-gray-200 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-1/6 w-2/3 z-40`}
      >
        <ul className="mt-16 h-full w-full">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
                setIsOpen(false); // cierra el menú al seleccionar
              }}
              className="w-full h-15 list-none flex flex-row items-center px-4 py-3 hover:bg-gray-300 hover:cursor-pointer transition"
            >
              <div className="mr-3">{val.icon}</div>
              <div>{val.title}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Fondo semitransparente cuando el menú está abierto (solo móvil) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
