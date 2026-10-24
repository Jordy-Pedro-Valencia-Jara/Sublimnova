import type { ReactNode } from "react";

export interface Columna{
    clave:string;
    titulo:string;
    alineacion?:'left'|'center'|'right';
}
interface TablaProps{
    columnas:Columna[];
    datos:Record<string,ReactNode>[];
}

export function Tabla({columnas,datos}:TablaProps){
return(
    <div className="w-full overflow-hidden rounded-xl border border-white/50 shadow-sm bg-white/40 backdrop-blur-sm">
        <table className="w-full text-sm border-collapse">
            <thead className="bg-white/60 text-gray-800 font-bold text-xs uppercase tracking-wider border-b border-white/60">
                <tr>
                    {columnas.map((col,index)=>(
                        <th 
                            key={col.clave}
                            className={`py-2 px-3 ${index === 1 ? 'text-right' : 'text-left'}`}
                            >
                            {col.titulo}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {datos.map((fila,index)=>(
                    <tr key={index}
                        className={`transition-colors duration-150 cursor-pointer ${index % 2 === 0 ? 'bg-white/70 text-gray-800' : 'bg-white/30 text-gray-800'} hover:bg-indigo-500 hover:text-white font-medium`}
                    >
                        {columnas.map((col,colIdx)=>(
                            <td
                            key={col.clave}
                            className={`py-1.5 px-3 whitespace-nowrap ${colIdx === 1 ? 'text-right font-bold' : 'text-left'}`}
                            >
                                {fila[col.clave]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}