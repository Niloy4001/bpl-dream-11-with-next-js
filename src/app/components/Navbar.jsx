import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

export default function Navbar() {
  return (
    <div className="py-8">
      <div className="flex justify-between w-[90%] mx-auto">
        <div>
          <Image
            src={logo}
            quality={100}
            width={73}
            height={72}
            alt="bpl-dream-logo"
          ></Image>
        </div>
        <div className="flex list-none">
          <li className="ml-8">Home</li>
          <li className="ml-8">Fixture</li>
          <li className="ml-8">Team</li>
          <li className="ml-8">Schedule</li>
          <li className="ml-8">money:0</li>
        </div>
      </div>
    </div>
  );
}
