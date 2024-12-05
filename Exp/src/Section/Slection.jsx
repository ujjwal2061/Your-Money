import React  from "react"
import ToogleContext  from "./Toggle";
const Selection=({children})=>{
    const {toggle ,setToogle} =useState(ToogleContext)
return (
    <section className="relative w-full md:w-[850px] h-[100vh]    mx-auto">
        <button onClick={()=>setToogle(toggle ==="white"?"black":"white")}>X</button>
            {children}
     </section>
)
}
export default Selection;