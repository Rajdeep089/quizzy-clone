import React from 'react';
import { SlBadge } from "react-icons/sl";

const Leaderboard = () => {
  return (
    <div className="border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%]  mx-auto flex flex-col gap-y-2 justify-center items-center pb-4">
            <div className=" w-full border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md py-3 pl-2">
                <h1 className="text-[#FEFEFE] text-sm">Leaderboard</h1>
            </div>
            {/* card-1 */}
            <div className="hover:cursor-pointer hover:bg-gradient-to-t hover:from-[#5B7874] hover:to-[#6D7C5F] border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%] py-2">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <span className="text-[#EDFF87]">01.</span>
                        <SlBadge className="text-[#FFDE87]"/>
                        <span className="bg-[#D8D8D8] w-4 h-4 rounded-full"></span>
                        <h1 className="text-[#FEFEFE]">Name</h1>
                    </div>
                    <h1 className="text-[#FEFEFE]">0/233 <span className="text-[#EDFF87]">XP</span></h1>
                </div>
            </div>
            {/* card-2 */}
            <div className="hover:cursor-pointer hover:bg-gradient-to-t hover:from-[#5B7874] hover:to-[#6D7C5F] border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%] py-2">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <span className="text-[#EDFF87]">02.</span>
                        <SlBadge className="text-[#FFDE87]"/>
                        <span className="bg-[#D8D8D8] w-4 h-4 rounded-full"></span>
                        <h1 className="text-[#FEFEFE]">Name</h1>
                    </div>
                    <h1 className="text-[#FEFEFE]">0/233 <span className="text-[#EDFF87]">XP</span></h1>
                </div>
            </div>
            {/* card-3 */}
            <div className="hover:cursor-pointer hover:bg-gradient-to-t hover:from-[#5B7874] hover:to-[#6D7C5F] border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%] py-2">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <span className="text-[#EDFF87]">03.</span>
                        <SlBadge className="text-[#FFDE87]"/>
                        <span className="bg-[#D8D8D8] w-4 h-4 rounded-full"></span>
                        <h1 className="text-[#FEFEFE]">Name</h1>
                    </div>
                    <h1 className="text-[#FEFEFE]">0/233 <span className="text-[#EDFF87]">XP</span></h1>
                </div>
            </div>
            {/* card-4 */}
            <div className="hover:cursor-pointer hover:bg-gradient-to-t hover:from-[#5B7874] hover:to-[#6D7C5F] border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%] py-2">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <span className="text-[#EDFF87]">54.</span>
                        <SlBadge className="text-[#FFDE87]"/>
                        <span className="bg-[#D8D8D8] w-4 h-4 rounded-full"></span>
                        <h1 className="text-[#FEFEFE]">Name</h1>
                    </div>
                    <h1 className="text-[#FEFEFE]">0/233 <span className="text-[#EDFF87]">XP</span></h1>
                </div>
            </div>
        </div>
  )
}

export default Leaderboard