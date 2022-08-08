import React, { useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { BsClipboardCheck } from "react-icons/bs";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { cartSelector } from "../../../cart/selector";
import { VscSignIn, VscSignOut} from "react-icons/vsc";



const Header = () => {

  const navigate = useNavigate()

  const cart = useSelector(cartSelector)

  const user = JSON.parse(localStorage.getItem('user'))

  
  const cartLength= cart.myCart.length

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/dang-nhap')
  }
  useEffect(() => {
    
  }, [])
  
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  }
  const handleSearchEnter = (e) => {
    if(e.keyCode === 13){
      console.log(e.target.value);
    }
  }

  return (
    <div className="bg-[#D70018]">
      <div
        className="
            py-1
            flex
            flex-row
            items-center
            justify-around
            max-w-[1536px]
            mx-auto
            mb-3
            "
      >
        <div>
          <img 
            src="https://th.bing.com/th/id/OIP.msJ5-X_TC957GXCRltCiPAHaHa?pid=ImgDet&rs=1"
            alt="logo"
            className="w-16 cursor-pointer"
            onClick={() =>  navigate('/')}
          />
        </div>
        <div className="flex items-center bg-white rounded-full w-[500px] h-[34px]">
          <div className="text-white">
            <ImSearch className="text-black font-bold ml-2"/>
          </div>
          <input className="outline-none ml-2 w-[450px]" onKeyDown={(e) => handleSearchEnter(e)} onChange={(e) => handleSearchChange(e)}/>
        </div>
        {/* <div className="absolute top-[53px] ">
          <div className="h-[500px] w-[500px] bg-white rounded-xl">

          </div>
        </div> */}
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
          <div className="flex flex-row items-center text-white gap-1 cursor-pointer" onClick={() => navigate('gio-hang')}>
            
            {cartLength ? <BsFillCartCheckFill  className="text-2xl gap-1"/> : <AiOutlineShoppingCart  className="text-2xl gap-1"/>}
            <p className="text-xs">Giỏ <br/> hàng</p>
            <p className="relative bottom-4 right-10">{cartLength}</p>
          </div>
          {user 
          ? 
          <div>
            <div className="flex space-x-1 cursor-pointer group">
              <AiOutlineUser className="text-white group-hover:text-yellow-500"/>
              <p className="text-xs text-white cursor-pointer group-hover:text-yellow-500">{user.email}</p>
            </div>
            <div className="flex space-x-1 cursor-pointer group">
              <VscSignOut className="text-white group-hover:text-yellow-500"/>
              <p className="text-xs text-white group-hover:text-yellow-500" onClick={() => handleLogout()}>Đăng xuất</p>
            </div>
          </div>
          :
          <div>
            <div className="flex space-x-1 cursor-pointer group">
              <AiOutlineUserAdd className="text-white group-hover:text-yellow-500"/>
              <p className="text-xs text-white cursor-pointer group-hover:text-yellow-500" onClick={() => navigate('/dang-ky')}>Đăng ký</p>
            </div>
            <div className="flex space-x-1 cursor-pointer group">
              <VscSignIn className="text-white group-hover:text-yellow-500"/>
              <p className="text-xs text-white group-hover:text-yellow-500" onClick={() => navigate('/dang-nhap')}>Đăng nhập</p>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;