import React from "react";
import DesignPart from "../DesignPart/DesignPart";

const FirstSlide = () => {
  return (
    <div className="grid grid-rows-1 gap-4 md:grid-rows-3">
      <div className="md:flex gap-4 ">
        <div>
        <h2 className="font-bold">Design</h2>
        <p>Open positions in our design team</p>
        </div>
        <DesignPart />
      </div>
      <div>
        <h2 className="font-bold">Software Development</h2>
        <p>Open positions in our software team</p>
      </div>
      <div>
        <h2 className="font-bold">Customer Success</h2>
        <p>Open positions in our CX team</p>
      </div>
    </div>
  );
};

export default FirstSlide;
