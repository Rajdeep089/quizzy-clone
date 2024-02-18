import React from 'react';
import { TbLogout2 } from "react-icons/tb";

const Signout = () => {
  return (
    <div className="flex flex-row justify-start items-center w-[90%] mx-auto gap-2 scale-95 text-[#FEFEFE]">
            <TbLogout2/>
            <h1>Sign Out</h1>
        </div>
  )
}

export default Signout