import { useState } from "react";
import { NavIni } from "./component/navbar-inicio";
import { Tabla, type Columna } from "./component/carta-precio";
import logoNombre from "./assets/logo-nombre.png";
import tazas11oz from "./assets/tazas11oz.png";
import tazas15oz from "./assets/tazas15oz.png";
import tomatodo600ml from "./assets/tomatodo600ml.png";
import tomatodo750ml from "./assets/tomatodo750ml.png";
import ministanley14oz from "./assets/ministanley14oz.png";
import stanley40oz from "./assets/stanley40oz.png";
import stanley30oz from "./assets/stanley30oz.png";

function App() {
  //Opciones para productos
  type TipoProducto = "Tazas" | "Tomatodos" | "Mousepad" | "Polos" | "Cuadros";
  //Estado para los productos
  const [ProductoSeleccionado, setProductoSeleccionado] =
    useState<TipoProducto>("Tazas");
  // Estado para la pestaña de tazas seleccionada
  const [tazaSeleccionada, setTazaSeleccionada] = useState<"11oz" | "15oz">(
    "11oz",
  );
  // Estado para la pestaña de tomatodos seleccionada
  const [tomatodoSeleccionada, setTomatodoSeleccionada] = useState<
    "600ml" | "750ml"
  >("600ml");
  // Estado para la pestaña de tomatodos seleccionada
  const [stanleySeleccionado, setStanleySeleccionado] = useState<
    "14oz" | "30oz" | "40oz"
  >("14oz");

  // Estado para abrir/cerrar el menú hamburguesa en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  // TABLA 1: CABECERA
  const columnascabecera: Columna[] = [
    { clave: "Cantidad", titulo: "Cantidad" },
    { clave: "Precio", titulo: "Precio" },
  ];

  // TABLA 2-1: DATOS BLANCAS 11 oz
  const datosblancas11oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/10 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/8 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/7 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/6 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/5.5 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/5 c/u" },
  ];
  // TABLA 2-2: DATOS MAGICOS 11 oz
  const datosmagicos11oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/16 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/15.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/15 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/14.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/14 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/13 c/u" },
  ];
  // TABLA 2-3: DATOS VENTANA 11 oz
  const datosventana11oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/15 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/14.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/14 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/13.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/13 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/12 c/u" },
  ];

  // TABLA 3-1: DATOS BLANCAS 15 oz
  const datosblancas15oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/12 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/11.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/11 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/10.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/10 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/9.5 c/u" },
  ];
  // TABLA 3-2: DATOS MAGICOS 15 oz
  const datosmagicos15oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/20 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/19.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/19 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/18.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/18 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/17 c/u" },
  ];
  // TABLA 3-3: DATOS VENTANA 15 oz
  const datosventana15oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/19 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/18.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/18 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/17.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/17 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/16.5 c/u" },
  ];

  // TABLA 4-1: DATOS TOMATODO 600 ML
  const datostomatodo600ml = [
    { Cantidad: "1 a 5 uni", Precio: "S/13 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/12.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/12 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/11.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/11 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/10.5 c/u" },
  ];
  // TABLA 4-2: DATOS TOMATODO 750 ML
  const datostomatodo750ml = [
    { Cantidad: "1 a 5 uni", Precio: "S/15 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/14.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/14 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/13.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/13 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/12.5 c/u" },
  ];
  // TABLA 5-1: DATOS TOMATODO MINISTANLEY 14OZ
  const datosStanley14oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/36 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/35.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/35 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/34.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/34 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/33.5 c/u" },
  ];
  // TABLA 5-1: DATOS TOMATODO STANLEY 30OZ CON SUJETADOR
  const datosStanley30oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/44 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/43.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/43 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/42.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/42 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/41.5 c/u" },
  ];

  // TABLA 5-1: DATOS TOMATODO STANLEY 40OZ
  const datosStanley40oz = [
    { Cantidad: "1 a 5 uni", Precio: "S/47 c/u" },
    { Cantidad: "6 a 11 uni", Precio: "S/46.5 c/u" },
    { Cantidad: "12 a 23 uni", Precio: "S/46 c/u" },
    { Cantidad: "24 a 31 uni", Precio: "S/45.5 c/u" },
    { Cantidad: "32 a 49 uni", Precio: "S/45 c/u" },
    { Cantidad: "50 a mas uni", Precio: "S/44.5 c/u" },
  ];

  return (
    <>
      {/* NAVBAR CON MENÚ HAMBURGUESA RESPONSIVO */}
      <header className="bg-mauve-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
          {/* Fila del Logo + Botones Móviles */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <img
              className="w-32 sm:w-40 md:w-44 h-auto block m-1"
              src={logoNombre}
              alt="Logo"
            />

            {/* Controles para pantallas pequeñas (Botón Pedido + Menú Hamburguesa) */}
            <div className="flex items-center gap-2 md:hidden">
              <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                Pedido
              </button>

              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="p-1.5 text-gray-700 hover:text-indigo-600 focus:outline-none"
                aria-label="Abrir menú"
              >
                {menuAbierto ? (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Lista de navegación desplegable */}
          <nav
            className={`${menuAbierto ? "block" : "hidden"} w-full md:block md:w-auto mt-2 md:mt-0 transition-all`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center pb-2 md:pb-0">
              <NavIni>Productos</NavIni>
              <NavIni>Servicios</NavIni>
              <NavIni>Contactanos</NavIni>
            </ul>
          </nav>

          {/* Botón Pedido para Computadora */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-colors">
              Pedido
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
          {/*Opciones de producto*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 m-3">
            <button
              onClick={() => setProductoSeleccionado("Tazas")}
              className={` p-3 rounded-lg shadow-sm text-center font-bold transition-all
                ${
                  ProductoSeleccionado === "Tazas"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
            >
              Tazas
            </button>
            <button
              onClick={() => setProductoSeleccionado("Tomatodos")}
              className={` p-3 rounded-lg shadow-sm text-center font-bold transition-all
                ${
                  ProductoSeleccionado === "Tomatodos"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
            >
              Tomatodos
            </button>
            <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-gray-700">
              Mousepad
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-gray-700">
              Polos
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-gray-700">
              Cuadros
            </div>
          </div>

          {ProductoSeleccionado === "Tazas" && (
            //PESTAÑA TAZAS
            <div className="bg-gradient-to-br from-sky-200 via-pink-200 via-rose-180 to-amber-100 p-3 sm:p-5 rounded-xl shadow-md">
              {/* BOTONES PESTAÑAS 11oz / 15oz */}
              <div className="flex items-center w-full gap-2 sm:gap-4 mb-4 mt-1">
                <button
                  onClick={() => setTazaSeleccionada("11oz")}
                  className={`flex-1 text-center text-base sm:text-lg font-bold rounded-lg transition-all py-1.5 ${
                    tazaSeleccionada === "11oz"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white/50 text-black hover:bg-white/70"
                  }`}
                >
                  11 oz
                </button>

                <button
                  onClick={() => setTazaSeleccionada("15oz")}
                  className={`flex-1 text-center text-base sm:text-lg font-bold py-1.5 rounded-lg transition-all ${
                    tazaSeleccionada === "15oz"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white/50 text-black hover:bg-white/70"
                  }`}
                >
                  15 oz
                </button>
              </div>

              {/* SECCIÓN DE PRODUCTOS SEGÚN SELECCIÓN */}
              {tazaSeleccionada === "11oz" ? (
                /* VISTA 11 OZ */
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                    <img
                      className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                      src={tazas11oz}
                      alt="Tazas 11oz"
                    />
                  </div>

                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas Blancas
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosblancas11oz}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas Mágicas
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosmagicos11oz}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas con Ventana
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosventana11oz}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* VISTA 15 OZ */
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                    <img
                      className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                      src={tazas15oz}
                      alt="Tazas 15oz"
                    />
                  </div>

                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas Blancas
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosblancas15oz}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas Mágicas
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosmagicos15oz}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                        Tazas con Ventana
                      </h3>
                      <Tabla
                        columnas={columnascabecera}
                        datos={datosventana15oz}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {ProductoSeleccionado === "Tomatodos" && (
            <>
              {/*PESTAÑA TOMATODOS*/}
              <div className="bg-gradient-to-br from-sky-200 via-pink-200 via-rose-180 to-amber-100 p-3 sm:p-5 rounded-xl shadow-md">
                {/* BOTONES PESTAÑAS 600 ML / 750 ML */}
                <div className="flex items-center w-full gap-2 sm:gap-4 mb-4 mt-1">
                  <button
                    onClick={() => setTomatodoSeleccionada("600ml")}
                    className={`flex-1 text-center text-base sm:text-lg font-bold rounded-lg transition-all py-1.5 ${
                      tomatodoSeleccionada === "600ml"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white/50 text-black hover:bg-white/70"
                    }`}
                  >
                    600 ml
                  </button>

                  <button
                    onClick={() => setTomatodoSeleccionada("750ml")}
                    className={`flex-1 text-center text-base sm:text-lg font-bold py-1.5 rounded-lg transition-all ${
                      tomatodoSeleccionada === "750ml"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white/50 text-black hover:bg-white/70"
                    }`}
                  >
                    750 ml
                  </button>
                </div>

                {/* SECCIÓN DE PRODUCTOS SEGÚN SELECCIÓN */}
                {tomatodoSeleccionada === "600ml" ? (
                  /* VISTA 600 ML */
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                        src={tomatodo600ml}
                        alt="Tazas 11oz"
                      />
                    </div>

                    <div className="w-full grid grid-cols-1  gap-3">
                      <div>
                        <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                          Tomatodos 600 ml
                        </h3>
                        <Tabla
                          columnas={columnascabecera}
                          datos={datostomatodo600ml}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* VISTA 750 ML */
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                        src={tomatodo750ml}
                        alt="Tazas 15oz"
                      />
                    </div>

                    <div className="w-full grid grid-cols-1  gap-3">
                      <div>
                        <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                          Tomatodos 750 ml
                        </h3>
                        <Tabla
                          columnas={columnascabecera}
                          datos={datostomatodo750ml}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/*STANLEYS */}
              <div className="bg-gradient-to-br from-sky-200 via-pink-200 via-rose-180 to-amber-100 p-3 sm:p-5 rounded-xl shadow-md mt-4">
                {/* BOTONES STANLEYS 14OZ - 30OZ - 40OZ */}
                <div className="flex items-center w-full gap-2 sm:gap-4 mb-4 mt-1">
                  {/*BOTON 14 OZ */}
                  <button
                    onClick={() => setStanleySeleccionado("14oz")}
                    className={`flex-1 text-center text-base sm:text-lg font-bold rounded-lg transition-all py-1.5 ${
                      stanleySeleccionado === "14oz"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white/50 text-black hover:bg-white/70"
                    }`}
                  >
                    14 oz
                  </button>

                  {/*BOTON 30 OZ */}
                  <button
                    onClick={() => setStanleySeleccionado("30oz")}
                    className={`flex-1 text-center text-base sm:text-lg font-bold rounded-lg transition-all py-1.5 ${
                      stanleySeleccionado === "30oz"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white/50 text-black hover:bg-white/70"
                    }`}
                  >
                    30 oz
                  </button>
                  {/*BOTON 40 OZ */}
                  <button
                    onClick={() => setStanleySeleccionado("40oz")}
                    className={`flex-1 text-center text-base sm:text-lg font-bold rounded-lg transition-all py-1.5 ${
                      stanleySeleccionado === "40oz"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white/50 text-black hover:bg-white/70"
                    }`}
                  >
                    40 oz
                  </button>
                </div>

                {/* SECCIÓN DE PRODUCTOS SEGÚN SELECCIÓN */}
                {stanleySeleccionado === "14oz" && (
                  /* VISTA MINISTANLEY 14OZ */
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                        src={ministanley14oz}
                        alt="Tazas 11oz"
                      />
                    </div>

                    <div className="w-full grid grid-cols-1  gap-3">
                      <div>
                        <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                          Ministanley 14 oz
                        </h3>
                        <Tabla
                          columnas={columnascabecera}
                          datos={datosStanley14oz}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {stanleySeleccionado === "30oz" && (
                  /* VISTA STANLEY 30 OZ */
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                        src={stanley30oz}
                        alt="stanley 30 oz"
                      />
                    </div>

                    <div className="w-full grid grid-cols-1  gap-3">
                      <div>
                        <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                          Stanley 30 oz
                        </h3>
                        <Tabla
                          columnas={columnascabecera}
                          datos={datosStanley30oz}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {stanleySeleccionado === "40oz" && (
                  /* VISTA STANLEY 40 OZ */
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-64 h-64 sm:w-64 lg:w-72 lg:h-72 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain rounded-lg shadow-sm p-2"
                        src={stanley40oz}
                        alt="stanley 40 oz"
                      />
                    </div>

                    <div className="w-full grid grid-cols-1  gap-3">
                      <div>
                        <h3 className="font-bold text-black mb-1.5 text-center text-sm sm:text-base">
                          Stanley 40 oz
                        </h3>
                        <Tabla
                          columnas={columnascabecera}
                          datos={datosStanley40oz}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
