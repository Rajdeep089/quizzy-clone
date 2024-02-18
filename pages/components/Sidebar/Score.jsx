import React from 'react'
import { SlBadge } from "react-icons/sl";

const Score = () => {
  return (
    <div className="border border-[#6B786F] bg-[#6B786F] bg-opacity-30 rounded-md w-[90%]  mx-auto  h-[15%] md:h-[20%] lg:h-[22%] xl:h-[25%] flex justify-center ">
            <div className="flex flex-row gap-2 justify-center items-center py-2 scale-100 xs:scale-105 md:scale-125 lg:scale-150 ">
                <div className="relative w-24 h-24 ">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* <!-- Background circle --> */}
              <circle
                className="text-[#394541] stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              {/* <!-- Progress circle --> */}
              <circle
                className="text-[#EDFF87]  progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke-dashoffset="calc(400 - (400 * 45) / 100)"
              ></circle>

              {/* <!-- Center text --> */}
              <text
                x="50"
                y="40"
                fill="#FEFEFE"
                font-size="18"
                text-anchor="middle"
                alignment-baseline="middle"
                className="font-bold"
              >
                {" "}
                4/7
              </text>
              <text
                x="50"
                y="60"
                fill="#FEFEFE"
                font-size="14"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                Steak
              </text>
            </svg>
          </div>
          <div className="text-sm flex flex-col gap-y-2 ">
            <div className="flex flex-row gap-1 justify-between items-center w-full">
              <SlBadge className="text-[#EDFF87] text-2xl" />
              <h1 className="text-[#FEFEFE] font-bold text-xl">
                0/223 <span className="text-[#EDFF87]">XP</span>
              </h1>
            </div>
            <button className="font-bold border border-[#6B786F] bg-white bg-opacity-30 rounded-md text-[#EDFF87] px-1 py-1 text-xs">
              Take A Quiz
            </button>
          </div></div>
          
        </div>
  )
}

export default Score