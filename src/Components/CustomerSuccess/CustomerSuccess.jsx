import React from "react";
import { BiDollarCircle, BiTime } from "react-icons/bi";
import img from "../../../public/Flag/pngwing.com (13).png";
const CustomerSuccess = () => {
  return (
    <div className="pt-20">
      <div className=" md:flex  md:gap-10 gap-3">
        <div className="mb-5 md:mb-0 md:w-[30%] w-full">
          <h2 className="font-bold">Customer Success</h2>
          <p>Open positions in our CX team</p>
        </div>
        <div className="md:flex justify-between md:gap-10 md:w-[700px] border-2 border-gray-300 px-2 py-3 rounded-lg">
          <div className="space-y-3 ">
            <div className="md:flex  gap-1 items-center ">
              <h2 className="font-bold">Customer Success Manager</h2>
              <div className="flex flex-row-reverse justify-between">
                <li className="bg-gray-300 rounded-md px-1">
                  Customer Success
                </li>
                <div className="md:hidden flex items-center bg-gray-300 shadow-xl rounded-md">
                  <img className="h-6" src={img} alt="" />
                  <h4>Austria, Austria</h4>
                </div>
              </div>
            </div>
            <p>
              We're looking for a mid-level product designer to join our team
            </p>
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <BiTime /> <span>Full Time</span>
              </div>
              <div className="flex gap-1 items-center">
                <BiDollarCircle /> <span>80k - 100k</span>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:flex items-center bg-gray-300 shadow-xl rounded-md">
              <img className="h-6" src={img} alt="" />
              <h4>Austria, Austria</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
