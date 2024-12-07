
import { useState, createContext } from "react";
export const ToogleContext=createContext("light")
const ToogleProvider =({children})=>{
    const [theme, setTheme] = useState("light");
    return (

        <ToogleContext.Provider value={{theme ,setTheme}}>
            {children}
        </ToogleContext.Provider>
    )
}
export default ToogleProvider;