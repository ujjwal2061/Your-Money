
import { useState, createContext } from "react";
const ToogleContext=createContext()
const ToogleProvider =({children})=>{
    const [toggle, setToggle] = useState("white");
    return (

        <ToogleContext.Provider value={{toggle ,setToggle}}>
            {children}
        </ToogleContext.Provider>
    )
}
export {ToogleProvider};
export default ToogleContext;