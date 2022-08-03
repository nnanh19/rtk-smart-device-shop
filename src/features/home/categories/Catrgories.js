import React from "react";
import { GrFormNext } from "react-icons/gr";
import { BsPhone } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";

const Catrgories = () => {
  return (
    <div className="w-[230px]">
      <ul>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BsPhone /> Điện thoại
          </div>
          <GrFormNext />
        </li>
        <div className="text-center cursor-pointer"><p>Iphone</p></div>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AiOutlineLaptop />
            Laptop
          </div>
          <GrFormNext />
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AiOutlineTablet />
            Máy tính bảng
          </div>
          <GrFormNext />
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GiHeadphones /> Âm thanh
          </div>
          <GrFormNext />
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <VscWatch /> Đồng hồ
          </div>
          <GrFormNext />
        </li>
      </ul>
    </div>
  );
};

export default Catrgories;
