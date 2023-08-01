import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";

const HeaderTitleSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="md:flex  justify-between mt-7 md:mt-0">
        <div className="space-y-5">
          <h2 className="text-4xl font-semibold">
            Start Doing Works that meters
          </h2>
          <p className="text-justify font-semibold text-black">
            Our philosophy is simple - hire a team of diverse.Passionate people
            and foster a culter that empowers you to do your best work
          </p>
        </div>
        <div>
          {/*  */}
          <div className="relative inline-block  text-left md:mt-0 w-full  mt-7 pb-7">
            <div className="">
              <button
                type="button"
                className="inline-flex items-center  p-1 text-sm font-bold text-gray-600 bg-white border-2 border-purple-700 rounded hover:border-gray-400 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img className="h-7" src="https://w7.pngwing.com/pngs/691/757/png-transparent-earth-world-earth-3d-computer-graphics-globe-world.png" alt="" />
                Worldwide
                <BiSolidChevronDown
                  className="w-6 h-6 ml-7 text-black"
                  aria-hidden="true"
                />
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    A-Z
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Z-A
                  </a>
                </div>
              </div>
            )}
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTitleSection;
