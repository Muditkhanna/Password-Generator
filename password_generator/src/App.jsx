import { useState,useCallback, useEffect, useRef } from 'react'



function App() {
const [length,setlength]=useState(8);
const [char,setchar]=useState(false);
const [num,setnum]=useState(false);
const [password,setpassword]=useState("mudit");

const passwordref=useRef(null);
const passgenerator=useCallback(()=>{
 let pass="";
 let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 if(num)str+="0123456789";
 if(char)str+="!@#$%^&*-_+=[]{}~`"
 
 for(let i=1;i<=length;i++)
 {
  let chars=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(chars);

 }
 setpassword(pass);
},[length,char,num])
const copypassword=useCallback(()=>{
passwordref.current?.select()
window.navigator.clipboard.writeText(password);
},[password])
useEffect(()=>{
passgenerator();
},[length,num,char,passgenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg  px-4,my-8
    bg-gray-700 text-orange-500  text-center'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='className="flex shadow rounded-lg
      overflow-hidden mb-4"'>
       <input
  type="text"
  value={password}
  class="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
  placeholder="Password"
  readonly
  ref={passwordref}
/>
  <button onClick={copypassword}
  className='outline-none bg-blue-700 text-white px-3
   py-0.5 shrink-0'>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex-items-center gap-x-1'>
      <input
       type="range"
       min ={6}
       max ={100}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setlength(e.target.value)}}
       />
       <label>Length: {length}</label>
    </div>
    <div className='flex-items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={num}
      id="numberInput"
      onChange={()=>{
        setnum((prev)=>!prev)
      }
    }
      />
      <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex-item-center gap-x-1'>
      <input type="checkbox"
       defaultChecked={char}
       id="charInput"
       onChange={()=>{
        setchar((prev)=>!prev)
       }
      }
      />
      <label htmlFor="charInput">Characters</label>
    </div>
  </div>
 </div>
 </>
  )
}

export default App
