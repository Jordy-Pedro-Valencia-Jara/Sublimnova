import { useState } from 'react'
import { NavIni } from './component/navbar-inicio'
import {Tabla,type Columna} from './component/carta-precio'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import './App.css'


function App() {
  //VARIABLE TAZA
  const [tazaSeleccionada,setTazaSeleccionada]=useState<'11oz'|'15oz'>('11oz');

  //TABLA 1: CABECERA
  const columnascabecera: Columna[]=[
    {clave:'Cantidad', titulo:'Cantidad'},
    {clave:'Precio',titulo:'Precio'},
  ];

  //TABLA 2-1: DATOS BLANCAS 11 oz 
  const datosblancas11oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/10 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/8 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/7 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/6 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/5.5 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/5 c/u'}
  ];
  //TABLA 2-2: DATOS MAGICOS 11 oz
  const datosmagicos11oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/16 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/15.5 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/15 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/14.5 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/14 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/13 c/u'}
  ];
  //TABLA 2-3: DATOS VENTANA 11 oz
  const datosventana11oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/15 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/14.5 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/14 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/13.5 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/13 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/12 c/u'}
  ];

    //TABLA 3-1: DATOS BLANCAS 15 oz 
  const datosblancas15oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/12 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/11.5 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/11 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/10.5 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/10 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/9.5 c/u'}
  ];
  //TABLA 3-2: DATOS MAGICOS 15 oz
  const datosmagicos15oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/20 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/19.5 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/19 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/18.5 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/18 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/17 c/u'}
  ];
  //TABLA 3-3: DATOS VENTANA 15 oz
  const datosventana15oz=[
    {Cantidad:'1 a 5 uni',Precio:'S/19 c/u'},
    {Cantidad:'6 a 11 uni',Precio:'S/18.5 c/u'},
    {Cantidad:'12 a 23 uni',Precio:'S/18 c/u'},
    {Cantidad:'24 a 31 uni',Precio:'S/17.5 c/u'},
    {Cantidad:'32 a 49 uni',Precio:'S/17 c/u'},
    {Cantidad:'50 a mas uni',Precio:'S/16.5 c/u'}
  ];

  return (
    <>
    <div className='bg-mauve-100'>
      <div className='max-w-6xl mx-auto my-0 px-1 block  flex items-center justify-between '>
        <div className='inline-block'>
          <img className='w-44 h-auto block px-0 py-0 m-1'
          src="./src/assets/logo-nombre.png" />
        </div>
        <div className='inline-block'>
          <nav>
            <ul>
              <NavIni>Productos</NavIni>
              <NavIni>Servicios</NavIni>
              <NavIni>Contactanos</NavIni>
            </ul>
          </nav>
        </div>
        <div className='inline-block'>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" >Pedido</button>
        </div>
      </div>
    </div>
    
    <div >
      <div className='max-w-6xl mx-auto px-1 py-2 block'>
        <div className='bg-gradient-to-br from-sky-200 via-pink-200 via-rose-180 to-amber-100 p-4 rounded-xl '>
          <div className='flex items-start w-full  gap-4 mb-5 mt-1'>

            <button
              onClick={()=>setTazaSeleccionada('11oz')}
              className={`flex-1 text-center text-lg  font-bold rounded-lg transition-all py-1 ${
                tazaSeleccionada ==='11oz'
                  ?'bg-indigo-600 text-white shadow-md'
                  :'bg-white/50 text-black hover:bg-white/70'
              }`}
              >
              11 oz
            </button>
            <button
            onClick={()=>setTazaSeleccionada('15oz')}
            className={`flex-1 text-center text-lg  font-bold py-1 rounded-lg transition-all ${
                tazaSeleccionada ==='15oz'
                  ?'bg-indigo-600 text-white shadow-md'
                  :'bg-white/50 text-black hover:bg-white/70'
              }`}>
                15 oz
            </button>
          </div>
          {tazaSeleccionada === '11oz'?(
            <div className='flex items-start gap-4 overflow-x-auto'>
              <div className='w-72 h-72 flex-shrink-0'>
                <img className='w-full h-full rounded-lg shadow-sm p-2' src="./src/assets/tazas11oz.png"/></div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas Blancas</h3>
                <Tabla columnas={columnascabecera} datos={datosblancas11oz}/>
              </div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas Magicas</h3>
                <Tabla columnas={columnascabecera} datos={datosmagicos11oz}/>
              </div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas con Ventana</h3>
                <Tabla columnas={columnascabecera} datos={datosventana11oz}/>
              </div>
          </div>
          ):(
            <div className='flex items-start gap-4 overflow-x-auto'>
              <div className='w-72 h-72 flex-shrink-0'>
                <img className='w-full h-full rounded-lg shadow-sm p-2' src="./src/assets/tazas15oz.png"/></div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas Blancas</h3>
                <Tabla columnas={columnascabecera} datos={datosblancas15oz}/>
              </div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas Magicas</h3>
                <Tabla columnas={columnascabecera} datos={datosmagicos15oz}/>
              </div>
              <div className='flex-1 min-w-[200px] '>
                <h3 className='font-bold text-black mb-2 text-center'>Tazas con Ventana</h3>
                <Tabla columnas={columnascabecera} datos={datosventana15oz}/>
              </div>
          </div>
          )}

        </div>
        
        <div>
          <div>tomatodos</div>
          <div>mousepad</div>
        </div>
        <div>
          <div>polos</div>
          <div>cuadros</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App