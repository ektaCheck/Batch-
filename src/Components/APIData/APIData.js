import axios from 'axios'
import React from 'react'
import {useState} from "react"

function APIData() {
    const[jokes,setJokes]=useState("Click button to generate jokes")
    async function handleClick(){
        let mdata= await axios.get("https://api.chucknorris.io/jokes/random")
        console.log(mdata.data.value);
        // through fetch
        // let data=await fetch("https://api.chucknorris.io/jokes/random")
        // let finalData=await data.json();
        // console.log(finalData);
        setJokes(mdata.data.value)
    }

    // fetch("https://api.chucknorris.io/jokes/random")
    // .then((val)=>val.json())
    // .then((final)=>final)
  return (
    <div>
        <h1>{jokes}</h1>
        <button onClick={handleClick}>Generate Joke</button>
    </div>
  )
}

export default APIData

// 1010
// 2^3/2^2/2^1/2^0 
// -8+0+2+0=>-6

// -5
// 0101
// 1010
// +  1
// 1011
// 0100
// 2^3/2^2/2^1/2^0
// 0+4+0+0
// 4