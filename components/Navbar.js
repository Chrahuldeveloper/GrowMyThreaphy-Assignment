"use client";
import Image from "next/image";
import Sidebar from "./SideBar";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

export default function Navbar() {
  const links = [
    "Services",
    "About",
    "Testimonials",
    "Rates & FAQs",
    "Areas Served",
    "Contact",
  ];

  const [tootleSideBar, settootleSideBar] = useState(false);

  return (
    <>
      <nav className="p-4 flex justify-between items-center md:hidden ">
        <div>
          <Image
            src={
              "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            }
            width={150}
            height={150}
            alt="logo"
            blurDataURL="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
          />
        </div>
        <div>
          <IoMenuOutline
            size={30}
            color="black"
            cursor={"pointer"}
            onClick={() => {
              settootleSideBar(true);
            }}
          />
        </div>
      </nav>

      {tootleSideBar ? <Sidebar settootleSideBar={settootleSideBar} /> : null}

      <nav className="hidden md:flex items-center justify-around p-5 bg-[#f5f7fa]  ">
        <div>
          <Image
            src={
              "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            }
            width={150}
            height={150}
            alt="logo"
            blurDataURL="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
          />
        </div>

        <ul className="flex items-center space-x-6 ">
          {links.map((i, id) => {
            return (
              <li key={id} className="text-[#4a4c60] text-lg cursor-pointer">
                {i}
              </li>
            );
          })}
        </ul>

        <div>
          <button className="bg-white border-[1px] border-[#4a4c60] text-[#4a4c60] rounded-lg text-lg  px-5 py-2 flex items-center  justify-between space-x-10">
            <BsStars color="#1e3b8a" size={24} />
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
