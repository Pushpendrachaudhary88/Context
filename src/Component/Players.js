import React,{useContext}from "react"
import CricketerContext from "../Context/CricketerContext"

const Players =()=>{
    let {cricketer ,setCricketer} = useContext(CricketerContext)


    return(
        <div>
        <h1>Player</h1>
        {/* <h1>Lets Welcome {value}</h1> */}
        <h1>{cricketer.name}</h1>
        <p> He is of {cricketer.age}</p>
        <p> He has taken {cricketer.wickets} wickets</p>
        <p> He is {cricketer.retire ? "retired" : "not retired"}</p>
        
        <button onClick={()=>setCricketer({...cricketer, age: 42})}>Update Dhoni Age</button>
    </div>
    )
}

export default Players