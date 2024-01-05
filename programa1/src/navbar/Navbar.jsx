import React from "react";

export const Navbar = () => {
  return (
    <nav className='top-0 left-0 right-0 p-4 flex justify-end'>
      <button className=' z-10 rounded-xl bg-[#5BC6C6] py-3 px-4 hover:opacity-75'>
        Health insurance
      </button>
      <button className=' z-10 rounded-xl bg-[#fff] text-black hover:opacity-75 py-3 px-4 ml-4'>
        Log in
      </button>
      <button className=' z-10 rounded-xl bg-[#FF4742] hover:opacity-75 py-3 px-4 ml-4'>
        Post a remote job
      </button>
    </nav>
  )
}