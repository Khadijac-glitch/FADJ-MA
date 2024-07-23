// components/Sidebar.js

import Link from "next/link";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsClipboard2Plus } from "react-icons/bs";
import "./Cards.css";
const Sidebar = () => {
  return (
    <div className="bg-slate-700 text-white w-64 h-screen fixed left-0 top-0 flex flex-col justify-between hidden sm:block">
      <div className="">
        <Link
          href="#home"
          className="flex gap-4 py-4 bg-gray-800 w-100 font-bold px-6 text-white text-2xl hover:pt-6 mb-2"
        >
          <Image src="/logo.png" width={40} height={40} className="" />
          Fadj-Ma
        </Link>
        <Link
          href="#admin"
          className="flex gap-4 py-2 px-4 text-white hover:bg-cyan-600 mb-2"
        >
          <Image
            src="/modou.jpg"
            width={50}
            height={50}
            className="object-contain rounded-full "
          />
          <div>
            <h1 className="text-md">Modou Fall</h1>
            <p className="text-yellow text-xs"> Administrateur</p>
          </div>
          <div className="h-22 pt-2 px-8 ">
            <BsThreeDotsVertical />
          </div>
        </Link> <br />
        <Link
          href="/"
          className="flex gap-4 py-2 font-sans px-4 text-white focus:bg-cyan-600 mb-2"
        >
          <MdOutlineSpaceDashboard />
          Tableau de bord
        </Link>
        <Link
          href="dashboard/medicament"
          className="flex gap-4 py-2 px-4 font-sans text-white focus:bg-cyan-600  mb-2"
        >
          <BsClipboard2Plus />
          Médicaments
        </Link>
      </div>
      <div className="foot flex gap-3 bg-gray-800 h-8">
        <span className="text text-sm w-">Propulsé par Red Team © 2024</span>
        <p className=" text text-sm">version 1.1.2</p>
      </div>
    </div>
  );
};

export default Sidebar;
