import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { BsClipboardCheck } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-[#D70018]">
      <div
        className="
            mx-auto 
            p-1
            flex
            flex-row
            items-center
            justify-evenly
            max-w-[1536px]
            mb-3
            "
      >
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.msJ5-X_TC957GXCRltCiPAHaHa?pid=ImgDet&rs=1"
            alt="logo"
            className="w-16"
          />
        </div>
        <div className="flex items-center bg-white rounded-full w-[500px] h-[34px]">
          <div className="text-white">
            <ImSearch className="text-black font-bold ml-2"/>
          </div>
          <input className="outline-none ml-2 w-[450px]"/>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col text-white">
            <p className="text-xs">Gọi mua hàng</p>
            <p className="text-xs">19001990</p>
          </div>
          <div className="flex flex-row items-center text-white gap-1">
            <BiMap className="text-2xl"/>
            <p className="text-xs">Cửa hàng <br/> gần bạn</p>
          </div> 
          <div className="flex flex-row items-center text-white gap-1">
            <BsClipboardCheck className="text-2xl"/>
            <p className="text-xs">Tra cứu <br/> đơn hàng</p>
          </div>
          <div className="flex flex-row items-center text-white gap-1">
            <AiOutlineShoppingCart className="text-2xl gap-1"/>
            <p className="text-xs">Giỏ <br/> hàng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
