import type { ReactNode } from "react";

interface NavIniProp{
    children: ReactNode,

}
export function NavIni ({children}:NavIniProp){
    return(
        <a className="cursor-pointer inline-block hover:bg-mauve-200 hover:text-blue-400 transition-colors px-4 py-2 mx-0.5 text-lg">{children}</a>
    );
}