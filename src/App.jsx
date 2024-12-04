import { useState, useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
 const [length,Setlength] = useState(6);
 const [number,Setnumber] = useState(false);
 const [char,setchar] = useState(false);
 const [Password, Setpassword] = useState("");
  
 const Passwordgenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  if(number) str +="0123456789";
  if(char) str += "~!@#$%^&*(){}";

  for (let i = 0; i <= length; i++) {
    let chart = Math.floor(Math.random() * str.length + 1);
    pass +=str.charAt(chart);
  }
  Setpassword(pass);
  
}, [length,number,char,Setpassword]);

 useEffect(()=>{
  Passwordgenerator()
 },[length,number,char,Passwordgenerator]);
  return (
    <>
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-orange-500 bg-gray-700'> 
     <h1 className='text-xl text-center font-semibold text-white py-2'>Password Generator</h1>
          <div className='className= " flex shadow rounded-lg overflow-hidden md-10"'>
          <input type='text' value={Password} className='outline-none w-full py-1 px-2' 
          placeholder='password' readOnly/>
          <button className='ouline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'> copy</button>
          </div> 
          <div className=' flex text-sm gpa-x-2'>
                <div className=' flex items-center gap-x-1 py-5'>
                <input type='range' min={6} max={20} value={length} className='cursor-pointer' 
                onChange={(e)=>{Setlength(e.target.value)}}/>
                <label htmlFor='' className='text-green-500 font-bold'>Length {length}</label>
                </div> 
                <div className=' flex items-center gap-x-1 pl-2'>
                   <input type='checkbox'
                   defaultChecked={number}
                   id="numberInput"
                   onChange={(e)=>{
                    Setnumber((prev) => !prev)
                   }}/>
                   <label htmlFor='numberInput' className='text-green-500 font-bold'>Numbers</label>
                </div>
                <div className=' flex items-center gap-x-1 pl-2'>
                <input type='checkbox'
                defaultChecked={char}
                id="charInput"
                onChange={(e)=>{
                 setchar((prev) => !prev)
                }}/>
                <label htmlFor='charInput' className='text-green-500 font-bold'>Characters</label>
             </div>
          </div>
     </div>
    </>
  )
}

export default App
