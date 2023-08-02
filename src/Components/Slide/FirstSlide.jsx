import React from "react";
import DesignPart from "../DesignPart/DesignPart";
import { BiDollarCircle, BiTime } from "react-icons/bi";
import img from '../../../public/Flag/pngwing.com (13).png';
const FirstSlide = () => {
  return (
    <div className="pt-20">
      <div className=" md:flex md:gap-10 w-full justify-around">
        <div className="mb-5 md:mb-0">
          <h2 className="font-bold">Design</h2>
          <p>Open positions in our design team</p>
        </div>
        <div className="flex border-2 border-gray-300 px-2 py-3 rounded-lg">
        <div className="space-y-3 ">
          <div className="md:flex md:gap-2 items-center ">
            <h2 className="font-bold">Product Designer</h2>
            <div className="flex justify-between">
              <li className="bg-gray-300 rounded-md px-1">Design</li>
              <div className="md:hidden flex items-center bg-gray-300 shadow-xl px-1 rounded-md">
                <img className="h-6" src={img} alt="" />
                <h4>Austria, Austria</h4>
              </div>
            </div>
          </div>
          <p>We're looking for a mid-level product designer to join our team</p>
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
          <div className="md:flex px-1 hidden items-center bg-gray-300 shadow-xl rounded-md">
            <img className="h-6" src={img} alt="" />
            <h4>Austria, Austria</h4>
          </div>
        </div>
        </div>
      </div>

      <div className="md:flex md:gap-10 w-full justify-around md:pt-8">
        <div></div>
        <div className="md:flex ">
        <div className="space-y-3 border-2 border-gray-300 px-2 py-3 rounded-lg">
          <div className="md:flex md:gap-2 items-center ">
            <h2 className="font-bold">UX Designer</h2>
            <div className="flex justify-between">
              <li className="bg-gray-300 rounded-md  px-1">Design</li>
              <div className="md:hidden flex items-center bg-gray-300 shadow-xl px-1 rounded-md">
                <img className="h-6" src={img} alt="" />
                <h4>Austria, Austria</h4>
              </div>
            </div>
          </div>
          <p>We're looking for a mid-level UX designer to join our team</p>
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

export default FirstSlide;
