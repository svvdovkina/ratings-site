import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
import { createContext, ReactNode, useContext, useState } from "react";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

const AppContext = createContext<IAppContext>({
    menu: [],
    firstCategory: TopLevelCategory.Courses
});

export const AppContextProvider = ({menu, firstCategory, children}
    :IAppContext & {children: ReactNode}) : JSX.Element =>{
    
    
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    
    return <AppContext.Provider value={
        {
            menu: menuState, 
            firstCategory, 
            setMenu: setMenuState
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>useContext(AppContext);