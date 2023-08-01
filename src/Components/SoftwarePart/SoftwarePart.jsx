import React from "react";
import { BiDollarCircle, BiTime } from "react-icons/bi";

const SoftwarePart = () => {
  return (
    <div className="pt-20">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div>
          <h2 className="font-bold">Software Development</h2>
          <p>Open positions in our software team</p>
        </div>
        <div className="space-y-3 border-2 border-gray-300 px-2 py-3 rounded-lg">
          <div className="md:flex md:gap-2 items-center ">
            <h2 className="font-bold">Engineering Manager</h2>
            <div className="flex justify-between">
              <li className="bg-gray-300 rounded-md px-1">Software</li>
              <div className="md:hidden flex items-center bg-gray-300 shadow-xl px-1 rounded-md">
                <img
                  className="h-6"
                  src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
                  alt=""
                />
                <h4>Austria, Austria</h4>
              </div>
            </div>
          </div>
          <p>
            We're looking for an experienced engineering manager to join our
            team
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
          <div className="md:flex hidden items-center bg-gray-300 shadow-xl rounded-md w-1/2">
            <img
              className="h-6"
              src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
              alt=""
            />
            <h4>Austria, Austria</h4>
          </div>
        </div>
      </div>
      {/* Frontend Developer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
        <div></div>
        <div className="space-y-3 border-2 border-gray-300 px-2 py-3 rounded-lg">
          <div className="md:flex gap-2 items-center ">
            <h2 className="font-bold">Frontend Developer</h2>
            <div className="flex justify-between">
              <li className="bg-gray-300 rounded-md px-1">Software</li>
              <div className="md:hidden flex items-center bg-gray-300 shadow-xl px-1 rounded-md">
                <img
                  className="h-6"
                  src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
                  alt=""
                />
                <h4>Austria, Austria</h4>
              </div>
            </div>
          </div>
          <p>
            We're looking for an experienced frontend developer to join our team
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
          <div className="hidden md:flex items-center bg-gray-300 shadow-xl rounded-md w-1/2">
            <img
              className="h-6"
              src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
              alt=""
            />
            <h4>Austria, Austria</h4>
          </div>
        </div>
      </div>
      {/* Backend Developer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
        <div></div>
        <div className="space-y-3 border-2 border-gray-300 px-2 py-3 rounded-lg">
          <div className="md:flex md:gap-2 items-center ">
            <h2 className="font-bold">Backend Developer</h2>
            <div className="flex justify-between">
            <li className="bg-gray-300 rounded-md px-1">Software</li>
            <div className="md:hidden flex items-center bg-gray-300 shadow-xl px-1 rounded-md">
                <img
                  className="h-6"
                  src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
                  alt=""
                />
                <h4>Austria, Austria</h4>
              </div>
            </div>
          </div>
          <p>
            We're looking for an experienced backend developer to join our team
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
          <div className="hidden md:flex items-center bg-gray-300 shadow-xl rounded-md w-1/2">
            <img
              className="h-6"
              src="https://w7.pngwing.com/pngs/451/296/png-transparent-flag-of-australia-australian-flag.png"
              alt=""
            />
            <h4>Austria, Austria</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePart;
