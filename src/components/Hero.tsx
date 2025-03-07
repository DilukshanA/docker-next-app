"use client";
import React from 'react'
import {useState} from "react";

const Hero = () => {

    const [num1, setNum1] = useState<number | string>("");
    const [num2, setNum2] = useState<number | string>("");
    const [result, setResult] = useState(-1);

    const operators = [
        "+",
        "-",
        "*",
        "/"
    ]

    const calculate = 

    const test = () => {
        console.log('test');
        console.log(num1);
        console.log(num2);
    }

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <h1 className='text-2xl font-semibold'> Simple Calculator</h1>
        {/*input boxes*/}
        <div className='p-4'>
            <input className="border rounded-lg p-2 mr-4" type="number" placeholder='Enter first number' onChange={(e)=>setNum1(e.target.value)}/>
            <input className="border rounded-lg p-2" type="number" placeholder='Enter first number' onChange={(e)=>setNum2(e.target.value)}/>
        </div>
        {/*maths tools*/}
        <div>
            {operators.map((operator, index)=>(
                <button key={index} className='bg-blue-500 hover:bg-black w-10 text-white p-2 rounded-lg m-2'>{operator}</button>
            ))}
        </div>

        {/*result*/}
        <div className='w-full px-20'>
            {result
            ?<div className='bg-green-200 w-full h-20 rounded-xl flex justify-center items-center'>yes</div>
            :<div>no</div>}
        </div>


        {/*test button*/}
        <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={test}>Test</button>
    </div>
  )
}

export default Hero