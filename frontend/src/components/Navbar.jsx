import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [sticky,setsticky]=useState(false)
  useEffect(()=>{
    const handlescroll=()=>{
      if(window.scrollY>0){
        setsticky(true);
      }
      else{
        setsticky(false);
      }
    }
    window.addEventListener('scroll',handlescroll);
    return()=>{
      window.removeEventListener('scroll',handlescroll);
    }





  },[sticky,setsticky])
  const Navitems=(
    <>
    <li><a href="/">Explore</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a>Profile</a></li>
    </>

  );
  return (
  
      <>
      {/** to make navbar sticky add fixed in class and we want shadow in our navbar when we scroll
        our website .. here we will manage the scroll  state 
        -> make usestate for scroll jiski initial value zero rahegi , (sticky,setsticky)
usestate will handle the state and useeffect shadow lane mein help karega 
       */}
<div className={`max-w-screen-2xl-container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${sticky? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""}`}>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 ">
        {Navitems}
      </ul>
    </div>
    <a className="text-3xl font-bpld cursor  ">VoyageAI </a>
  </div>
  <div className="navbar-end space-x-5">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{Navitems}</ul>
  </div>
  <div className="hidden md:block px-1 ">{/* means medium devices mein hi dikhega search bar baki small mein hidden rahega */ }
  <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
  <input type="text" className="grow  outline-none" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
</div>
{/* inserting theme controller for dark or light mode*/ }
<label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" width="30" height="25"className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

  <div className="">

    <a className="btn bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
  </div>
</div>
</div>

</div>
      </>
 
  )
}
